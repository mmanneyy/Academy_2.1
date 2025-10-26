function remove(root, val) {
   if(!root) return null;
   if(val < root.val) root.left = remove(root.left, val);
   if(val > root.val) root.right = remove(root.right, val);
   if(!root.left) return root.right;
   else if(!root.right) return root.left;
   else {
    let s = getMin(root.right);
    root.val = s.val;
    remove(root.right, s.val);
   }
}