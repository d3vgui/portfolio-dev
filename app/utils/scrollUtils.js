export const handleSmoothScroll = (e, targetId) => {
  e.preventDefault()

  const element = document.querySelector(targetId)

  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}