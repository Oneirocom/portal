import { NodeSDK } from '@opentelemetry/sdk-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
// import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'

const SERVICE_NAME = process.env.SERVICE_NAME || 'magick'

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME,
  }),
  // spanProcessor: new SimpleSpanProcessor(new ConsoleSpanExporter()),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
  instrumentations: [
    getNodeAutoInstrumentations({
      // Generally doesn't give meaningful information
      '@opentelemetry/instrumentation-fs': {
        enabled: false,
      },
    }),
  ],
})
sdk.start()
