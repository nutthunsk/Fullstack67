function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censorText = sentence.replace(regex, '***');
    return censorText;
}

const originalPost = "JavaScript is fun , but sometimes javascript"
const cleanPost = censorWord(originalPost, "javascript");

console.log(originalPost);
console.log(cleanPost);