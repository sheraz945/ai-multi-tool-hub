function generateImage() {
    const prompt = document.getElementById('imgPrompt').value;
    const resultDiv = document.getElementById('imgResult');
    if(!prompt) {
        alert('براہ کرم تصویر کی تفصیل لکھیں!');
        return;
    }
    resultDiv.innerHTML = '<p>تصویر تیار ہو رہی ہے...</p>';
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&nologo=true`;
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="AI Generated Image">`;
}

function generateVoice() {
    const text = document.getElementById('textToSpeech').value;
    if(!text) {
        alert('براہ کرم کچھ متن لکھیں!');
        return;
    }
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ur-PK';
    window.speechSynthesis.speak(speech);
}

function removeVoice() {
    const fileInput = document.getElementById('audioInput');
    if(fileInput.files.length === 0) {
        alert('براہ کرم آڈیو فائل منتخب کریں!');
        return;
    }
    alert('وائس ریموور پروسیسنگ شروع ہو گئی ہے...');
}
