export function css(element, property) {
   return window.getComputedStyle(element, null).getPropertyValue(property);
}

export function resize_to_value(canvas, element) {
   let context = canvas.getContext("2d");
   context.font = css(element, 'font');
   let width;
   if(element.value == "") {
      if(element.placeholder == "") {
         width = "10px";
      }
      else {
         width = (context.measureText(element.placeholder).width + 6) + "px";
      }
   }
   else {
      width = (context.measureText(element.value).width + 6) + "px";
   }
   element.style.flexBasis = width;
}

export function print_mod(value) {
   return (value >= 0 ? '+' : '') + value;
}