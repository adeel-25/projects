function showSentence() {

    const menu = document.getElementById("wordMenu");

    const sentenceBox = document.getElementById("sentenceBox");

    if (menu.selectedIndex > 0) {

        const selectedOption =
            menu.options[menu.selectedIndex];

        sentenceBox.value =
            selectedOption.dataset.sentence;

    }

    else {

        sentenceBox.value = "";

    }

}



function speak(textToSay) {

    const message =
        new SpeechSynthesisUtterance(textToSay);

    message.pitch = 1.2;

    message.rate = 1.0;

    window.speechSynthesis.speak(message);

}



function speakWord() {

    const menu = document.getElementById("wordMenu");

    if (menu.selectedIndex > 0) {

        speak(menu.value);

    }

}



function speakSentence() {

    const sentenceBox =
        document.getElementById("sentenceBox");

    if (sentenceBox.value != "") {

        speak(sentenceBox.value);

    }

}