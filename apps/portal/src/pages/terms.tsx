import { PrivacyContent } from '@magickml/portal-ui';
import { LegalLayout } from '@magickml/portal-layout';

export default function terms() {
  return (
    <LegalLayout
      title="ONEIROCOM | TERMS OF USE"
      lastUpdated="2023-06-12"
      pdfLink="/documents/2023-06-12-Terms-of-Use-Oneirocom.docx.pdf"
    >
      <PrivacyContent />
    </LegalLayout>
  );
}
