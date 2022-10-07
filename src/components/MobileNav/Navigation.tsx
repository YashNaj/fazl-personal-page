import { makeUseVisualState, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const navigation = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={navigation}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = ['Work', 'About', 'Resume'];

export default Navigation
