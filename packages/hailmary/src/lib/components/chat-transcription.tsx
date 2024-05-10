'use client'

import { Button } from '@magickml/client-ui'
import { cn } from '@magickml/client-ui'
import { Mic } from 'lucide-react'
import React, { useRef, useState, useEffect } from 'react'
import RecordRTC from 'recordrtc'
import type { ChatTranscriptionProps } from '../types'

enum Status {
  DISCONNECTED,
  CONNECTED,
  LOADING,
}

type RecorderRef = RecordRTC

const ChatTranscription: React.FC<ChatTranscriptionProps> = ({
  onTranscript,
  ...micButtonProps
}) => {
  /* Assembly AI */
  const aaiSocket = useRef<WebSocket | null>(null)
  const recorder = useRef<RecorderRef | null>(null)
  const [status, setStatus] = useState<Status>(Status.DISCONNECTED)
  const [transcriptMsg, setTranscriptMsg] = useState<string>('')

  useEffect(() => {
    return () => {
      aaiSocket.current?.close()
      recorder.current?.pauseRecording()
    }
  }, [])

  const generateTranscript = async (e: any) => {
    e.preventDefault()
    if (!window) return
    setStatus(Status.LOADING)
    const response = await fetch(
      `http://${process.env.NEXT_PUBLIC_AGENT_SERVER_URL}/aai-token`
    )
    const data = await response.json()

    if (data.error) {
      alert(data.error)
      setStatus(Status.DISCONNECTED)
      return
    }

    const { token } = data

    aaiSocket.current = await new WebSocket(
      `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`
    )

    const texts = {} as { [key: number]: string }
    aaiSocket.current.onmessage = voicePrompt => {
      let msg = ''
      const res = JSON.parse(voicePrompt.data)
      // @ts-ignore
      texts[res.audio_start as number] = res.text
      const keys = Object.keys(texts) as unknown as number[]
      keys.sort((a, b) => a - b)
      for (const key of keys) {
        if (texts[key]) {
          msg += ` ${texts[key]}`
        }
      }
      setTranscriptMsg(prevMsg => prevMsg + msg)
    }

    aaiSocket.current.onerror = event => {
      console.error(event)
      aaiSocket?.current?.close()
      setStatus(Status.DISCONNECTED)
    }

    aaiSocket.current.onclose = event => {
      console.log(event)
      setStatus(Status.DISCONNECTED)
    }

    aaiSocket.current.onopen = () => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(stream => {
          recorder.current = new RecordRTC(stream, {
            type: 'audio',
            mimeType: 'audio/webm;codecs=pcm',
            recorderType: RecordRTC.StereoAudioRecorder,
            timeSlice: 250,
            desiredSampRate: 16000,
            numberOfAudioChannels: 1,
            bufferSize: 4096,
            audioBitsPerSecond: 128000,
            ondataavailable: blob => {
              const reader = new FileReader()
              reader.onload = () => {
                const base64data = reader.result
                if (aaiSocket.current) {
                  aaiSocket.current.send(
                    JSON.stringify({
                      audio_data:
                        typeof base64data === 'string'
                          ? base64data.split('base64,')[1]
                          : '',
                    })
                  )
                }
              }
              reader.readAsDataURL(blob)
            },
          })

          recorder.current.startRecording()
        })
        .catch(err => {
          console.error(err)
          setStatus(Status.DISCONNECTED)
        })
    }

    setStatus(Status.CONNECTED)
  }

  const endTranscription = async (event: any) => {
    event.preventDefault()
    if (!window) return
    setStatus(Status.LOADING)

    console.log('Ending transcription...')

    aaiSocket.current?.send(JSON.stringify({ terminate_session: true }))
    aaiSocket.current?.close()

    recorder.current?.pauseRecording()
    recorder.current = null

    setStatus(Status.DISCONNECTED)
    onTranscript({ target: { value: transcriptMsg } } as any)
    setTranscriptMsg('')
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        {...micButtonProps}
        className={cn(
          micButtonProps.className,
          status === Status.CONNECTED && 'border-red-400 border text-red-500'
        )}
        onClick={
          status === Status.CONNECTED ? endTranscription : generateTranscript
        }
        disabled={status === Status.LOADING}
      >
        {status !== Status.LOADING ? (
          <>
            <Mic className="size-4" />
            <span className="sr-only">Use Microphone</span>
          </>
        ) : (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-4 h-4 animate-spin fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </Button>
    </>
  )
}

export default ChatTranscription