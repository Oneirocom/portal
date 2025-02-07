import Link from 'next/link'

export const EulaContent = () => {
  return (
    <>
      <p>
        This End User License Agreement (the “EULA”) is between you, as an
        individual or entity (“<strong>you</strong>”, “<strong>your</strong>” or
        “<strong>user</strong>”) and <strong>ONEIROCOM SYSTEMS INC</strong>. (“
        <strong>Oneirocom</strong>”, “<strong>us</strong>”, “<strong>we</strong>
        ” or “<strong>our</strong>”). This EULA is incorporated by reference
        into our Terms of Use, currently available at{' '}
        <Link className="link" href="/terms">
          Terms of Use
        </Link>{' '}
        (the “<strong>Terms</strong>”). Any capitalized terms used but not
        defined herein will have the meaning set out in the Terms. <br /> <br />{' '}
        By accessing and downloading our code package (the “
        <strong>Software</strong>”), you agree to be bound by the terms and
        conditions of this EULA. If you do not accept this EULA, do not use the
        Software and delete it. You agree that your access and download of the
        Software signifies that you have read, understood, and agree to be bound
        by this EULA.
      </p>
      {/* 1: Overview section */}
      <h2 className="legal-header">1. Overview</h2>
      <p>
        The Software consists of a downloadable code package for a base
        artificial intelligence agent with decision-making functionality, and
        development tools for artificial intelligence agents.
      </p>

      {/* 2: License section */}
      <h2 className="legal-header">2. License</h2>

      <ol className="legal-list list-alpha">
        <li>
          <strong>License Grant</strong>. Subject to the terms and conditions of
          this EULA and the Terms, Oneirocom hereby grants to you a
          non-exclusive and non-transferrable license to download, install, use,
          modify, improve, make derivative works of, distribute, and display the
          Software, including all enhancements, modifications and updates of the
          Software as we may make available to you through our website from time
          to time (the “<strong>License</strong>”).
        </li>
        <li>
          <strong>Open Source Materials</strong>. The Software incorporates
          Apache licensed components, and you agree that you (i) accept such
          components subject to the Apache 2.0 license, and (ii) will comply
          with the terms and conditions of the Apache 2.0 license.
        </li>
      </ol>

      {/* 3: Proprietary Rights section */}
      <h2 className="legal-header">3. Proprietary Rights</h2>
      <p>
        As between you and Oneirocom: (a) Oneirocom owns the Software; and (b)
        you will own all works and materials that are conceived, made,
        discovered, written or created by you through your use of the License.
        Except for the rights granted in this EULA and the Terms, no other
        rights are granted by Oneirocom, whether express or implied.
      </p>

      {/* 4: Assumption of Risk and Liability section */}
      <h2 className="legal-header">4. Assumption of Risk and Liability</h2>
      <p>
        YOU AGREE THAT YOU ASSUME FULL AND COMPLETE RISK AND RESPONSIBILITY FOR
        ANY LOSS, DAMAGE, CLAIMS, COSTS, EXPENSES AND LIABILITIES ARISING FROM
        THE SOFTWARE AND YOUR USE THEREOF, WHETHER KNOWN OR UNKNOWN, AND YOU
        AGREE TO HOLD ONEIROCOM HARMLESS FROM SAME.
      </p>

      {/* 5: Disclaimer section */}
      <h2 className="legal-header">5. Disclaimer</h2>
      <p>
        ONEIROCOM HEREBY DISCLAIMS ANY AND ALL GUARANTEES, REPRESENTATIONS,
        CONDITIONS AND WARRANTIES REGARDING THE SOFTWARE, WHETHER IMPLIED OR
        STATUTORY, ORAL OR OTHERWISE, ARISING UNDER ANY LAW OR OTHERWISE,
        INCLUDING WITHOUT LIMITATION, CONDITIONS AND WARRANTIES WITH RESPECT TO
        VALIDITY, ACCURACY, NON-INTERRUPTION, ERROR-FREE OPERATION,
        MERCHANTABILITY, QUALITY, NON-INFRINGEMENT OR FITNESS FOR A PARTICULAR
        PURPOSE. THE SOFTWARE IS PROVIDED “AS-IS” AND “AS-AVAILABLE”. THIS
        SECTION WILL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW.
      </p>

      {/* 6: Liability Limitation section */}
      <h2 className="legal-header">6. Liability Limitation</h2>
      <p>
        YOU AGREE THAT IN NO EVENT WILL ONEIROCOM HAVE ANY LIABILITY TO YOU FOR
        ANY INCIDENTAL, PUNITIVE, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES
        (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS, LOSS OF
        PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, LOST SAVINGS, LOST
        OPPORTUNITY COSTS OR OTHER SIMILAR PECUNIARY LOSS), HOWEVER CAUSED AND
        UNDER ANY THEORY OF LIABILITY (INCLUDING NEGLIGENCE) AND WHETHER OR NOT
        YOU HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        <br /> <br />
        FOR CERTAINTY, YOU AGREE THAT, IN ANY EVENT, {`ONEIROCOM'S`} AGGREGATE
        LIABILITY TO YOU IN RELATION TO THE SOFTWARE, THE ONEIROCOM WEBSITE, AND
        ALL OTHER ONEIROCOM PRODUCTS AND SERVICES OFFERED THROUGH OUR WEBSITE IS
        SUBJECT TO THE CAP SET OUT IN THE TERMS.
        <br /> <br />
        THIS SECTION WILL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW.
      </p>

      {/* 7: Indemnity section */}
      <h2 className="legal-header">7. Indemnity</h2>
      <p>
        You agree to defend, indemnify and hold harmless the Oneirocom and its
        officers, directors and employees against and from any and all claims,
        demands, actions, causes of action, damage, loss, suits, proceedings,
        costs, liabilities, expenses and charges as a result of or in connection
        with your use of the Software or any other matter relating to the
        Software.
      </p>

      {/* 8: General section */}
      <h2 className="legal-header">8. General</h2>
      <p>
        Nothing in this EULA limits the application of any provision of the
        Terms. We may modify or update this EULA from time to time in our sole
        discretion, so please review it periodically. Unless otherwise
        indicated, any changes to this EULA will apply immediately upon posting
        to our website. Your continued use of the Services after any changes to
        the EULA will be conclusively deemed as your acceptance of the EULA as
        amended.
      </p>
    </>
  )
}
