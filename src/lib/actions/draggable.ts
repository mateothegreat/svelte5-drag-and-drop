import type { DragOptions } from "./drag-options";

/**
 * Svelte action to handle routing.
 * Add `use:route` to an anchor element to handle routing.
 * @param node - The anchor element to handle.
 * @returns - The destroy function.
 */
export const draggable = (node: HTMLElement, options: DragOptions = {}) => {
  const eventListeners = [];
  let draggedElement: HTMLElement | null = null;

  const handleDragStart = (event: DragEvent) => {
    draggedElement = event.target as HTMLElement;
    event.dataTransfer?.setData('text/plain', '');
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    if (draggedElement && event.target !== draggedElement) {
      const targetElement = event.target as HTMLElement;
      if (node.contains(targetElement) && targetElement.parentNode === node) {
        node.insertBefore(draggedElement, targetElement);
      }
    }
  };

  node.addEventListener("dragstart", handleDragStart);
  node.addEventListener("dragover", handleDragOver);
  node.addEventListener("drop", handleDrop);
  console.log("asdfasdf", node);

  for (const child of node.children) {
    const htmlChild = child as HTMLElement;
    htmlChild.draggable = true;
    eventListeners.push(htmlChild.addEventListener("dragstart", handleDragStart));
  }

  return {
    destroy() {
      console.log("destroy", node);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    },
  }
}
