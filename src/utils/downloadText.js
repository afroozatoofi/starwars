/**
 * function for download the contextPreview as a file.
 */

export default function download_txt(contextPreview) {
    var textToSave = contextPreview;
    var hiddenElement = document.createElement('a');
  
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.txt';
    hiddenElement.click();
  }
