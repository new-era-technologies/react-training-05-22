type Contactprops = {
  contact: string;
};

export const Contact: React.FC<Contactprops> = (props) => (
  <a href="#contact" target="_blank">
    {props.contact}
  </a>
);
