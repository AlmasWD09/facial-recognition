
interface childrenProps{
   children: React.ReactNode;
}

export default function DashboardAuthLayout({ children }: childrenProps) {
  return (
    <div>
      {children}
    </div>
  );
}
