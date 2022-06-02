const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight - 1200,
    behavior: "smooth",
  });
};

export default scrollToBottom;
