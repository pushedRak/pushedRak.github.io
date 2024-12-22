import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-css';

export default function CodeBlock({ className, children }: { className?: string; children: string }) {
  const language = className?.replace(/language-/, '') || '';
  const html = Prism.highlight(children, Prism.languages[language], language);

  return (
      <>
        <p style={{color: "#666", marginBottom: "0.5rem"}}>{language}</p>
        <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: html }} />
      </>
  );
}
