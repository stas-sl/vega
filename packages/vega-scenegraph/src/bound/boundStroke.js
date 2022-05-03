export default function(bounds, item, miter) {
  if (item.stroke && item.opacity !== 0 && item.strokeOpacity !== 0) {
    let sw = item.strokeWidth != null ? +item.strokeWidth : 1;
    sw /= 2;  // stroke is centered along the outline, therefore expand bounds only by half of its width
    bounds.expand(sw + (miter ? miterAdjustment(item, sw) : 0));
  }
  return bounds;
}

function miterAdjustment(item, strokeWidth) {
  // TODO: more sophisticated adjustment? Or miter support in boundContext?
  return item.strokeJoin && item.strokeJoin !== 'miter' ? 0 : strokeWidth / 2;
}
