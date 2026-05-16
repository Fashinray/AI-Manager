// src/components/ui/Card.tsx

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card-theme rounded-xl shadow-sm border p-4 hover:shadow-md transition">
      {children}
    </div>
  );
};

export default Card;