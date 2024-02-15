import { PrivacyContent } from '@magickml/portal-ui';
import { LegalLayout } from '@magickml/portal-layout';

export default function privacy() {
  return (
    <LegalLayout
      title="ONEIROCOM | PRIVACY POLICY"
      lastUpdated="2023-06-12"
      pdfLink="/documents/2023-06-12-Privacy-Policy-Oneirocom.docx.pdf"
    >
      <PrivacyContent />
    </LegalLayout>
  );
}
