# SpeechSynthesis

This extension enables voice transcription on the TipTap text editor

## Options

### lang
The language set for voice transcription
<br>
Type: `string`<br>
Default: `fr-FR`

### pitch
The tone set for voice transcription
<br>
Type: `number`<br>
Default: `1`

## Usage

### JavaScript

```js
import { Editor } from "@tiptap/core";
import SpeechSynthesis from 'path/to/extension';

new Editor({
  extensions: [
    SpeechSynthesis.configure({
      lang: 'fr-FR',
      pitch: 1
    }),
  ],
})
```

#### Start voice transcription
```js
editor.commands.startSpeechSynthesis()
```

#### Stop voice transcription
```js
editor.commands.stopSpeechSynthesis()
```
