type Props = {
  char: any;
};

export default function index({ char }: Props) {
  return char && char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
}
