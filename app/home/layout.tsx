import { Home, Wallet, ShoppingBag, FileSpreadsheet, User } from "lucide-react";
import { Button } from "@nextui-org/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { icon: Home, label: "홈" },
    { icon: Wallet, label: "적립" },
    { icon: ShoppingBag, label: "스토어" },
    { icon: FileSpreadsheet, label: "캐시내역" },
    { icon: User, label: "마이페이지" },
  ];

  return (
    <div className="flex">
      {/* 데스크탑용 Navbar */}
      <aside className="flex-col hidden w-64 h-screen p-4 border-r md:flex">
  <nav className="space-y-4">
    {menuItems.map((item, index) => (
      <Button key={index} variant="light" className="justify-start w-full text-left">
        <item.icon className="w-6 h-6 mr-2" />
        {item.label}
      </Button>
    ))}
  </nav>
</aside>


      {/* 메인 컨텐츠 영역 */}
      <div className="flex-grow">
        {children}
      </div>

      {/* 모바일용 Footer */}
      <footer className="fixed bottom-0 w-full border-t md:hidden">
        <div className="flex justify-around py-2 bg-white">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
