
interface Props {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const ButtonSocios: React.FC<Props> = ({ 
    children,
    color,
    onClick, 
  }) => { 
    return (
        <button className="bg-white text-black rounded-full px-3 py-1 font-semibold hover:scale-105"
          onClick={onClick}
          style={{
             backgroundColor: color,
          }}
        >
        {children}
        </button>
      );
    }

export {ButtonSocios};
  
