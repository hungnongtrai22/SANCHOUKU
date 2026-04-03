"use client";

import { EmbedPDF } from "@simplepdf/react-embed-pdf";

// // 👇 dùng legacy worker (fix lỗi webpack)
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function PDFViewer() {
//   return (
//     <Document file="/assets/files/PGS_KATAYAMA.pdf">
//       <Page pageNumber={1} width={600} />
//     </Document>
//   );
// }

export default function PDFViewer() {
  return (
    <EmbedPDF
      companyIdentifier="react-viewer"
      mode="inline"
      style={{ width: '100%', height: '800px' }}
      documentURL="/assets/files/PGS_KATAYAMA.pdf"
    />
  );
}
