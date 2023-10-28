function applyHighlight() {
    // Get the selected color
    var highlightColor = document.getElementById("highlight-color").value;

    // Get the selected text
    var selectedText = getSelectedText();

    // Check if text is selected
    if (selectedText) {
        // Wrap the selected text with a span element and apply the highlight color
        var replacementHTML = '<span style="background-color: ' + highlightColor + ';">' + selectedText + '</span>';
        document.execCommand("insertHTML", false, replacementHTML);
    }
}

function getSelectedText() {
    var selectedText = "";
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}
