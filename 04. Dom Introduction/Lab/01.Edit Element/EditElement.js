function editElement(ref, match, replacer) {
    const matcher = new RegExp(match, 'g');

    ref.textContent = ref.textContent.replace(matcher,replacer);
}