import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import SpeechSynthesis from './TipTap-SpeechSynthesis/src/index.ts'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, SpeechSynthesis.configure({
      lang: 'fr-FR',
      pitch: 1,
    })],
    content: "<p>Bonjour Madame,<br><br>Serait t'il possible de déplacer le cours du 17 mars car notre classe ne sera pas présent étant donner que nous avons une sortie de prévue avec Monsieur KARDASHIAN.<br><br>Je vous remercie d'avance.<br>Cordialement,<br><br>Yaniv DOUIEB</p>",
  });

  const startSpeechSynthesis = () => {
    if(editor){
      editor.commands.startSpeechSynthesis()
    }
  }

  const stopSpeechSynthesis = () => {
    if(editor){
      editor.commands.stopSpeechSynthesis()
    }
  }

  return <>
  <EditorContent editor={editor} />
  <button onClick={startSpeechSynthesis}>Lancer la transcription vocale</button>
  <button onClick={stopSpeechSynthesis}>Arrêter la transcription vocale</button>
  </>;
};

export default Tiptap;
