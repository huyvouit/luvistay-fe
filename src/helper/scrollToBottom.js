const scrollToBottom = (number) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight - number,
    behavior: "smooth",
  });
};

export default scrollToBottom;
