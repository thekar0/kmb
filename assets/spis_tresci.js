document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector("aside");
  const tocContainer = document.createElement("ul");

  const headings = Array.from(document.querySelectorAll("h6"))
    .filter(h => !aside.contains(h) || h === aside.querySelector("h6"));

  const contentHeadings = headings.filter(h => !aside.contains(h));

  contentHeadings.forEach((heading, i) => {
    if (!heading.id) {
      heading.id = `heading-${i}`;
    }
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocContainer.appendChild(li);
  });

  aside.appendChild(tocContainer);
});
