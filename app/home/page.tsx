"use client";
import { Menu, Bell, Gift, HelpCircle, Users, Video, ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import React from "react";

export default function Component() {
  const tabs = [
    { id: "home", label: "홈" },
    { id: "referral", label: "추천인" },
    { id: "withdraw", label: "출금요청" },
    { id: "history", label: "출금내역" },
  ];
  const menuItems = [
    { icon: Bell, text: "공지사항" },
    { icon: Gift, text: "이벤트" },
    { icon: HelpCircle, text: "자주묻는질문" },
    { icon: Users, text: "추천인 관리" },
    { icon: Video, text: "제휴/광고" },
  ];

  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">마이페이지</h1>
        <Menu className="w-6 h-6" />
      </header>
      <Tabs aria-label="My Page Tabs" className="w-full" items={tabs} fullWidth>
        {(tab) => (
          <Tab key={tab.id} title={tab.label}>
            {/* Content for each tab */}
          </Tab>
        )}
      </Tabs>

      <main className="flex-grow p-4 space-y-4">
        <Card>
          <CardBody className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold">윤석규님</span>
              <span className="text-gray-600">010-4275-6579</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-6 h-6 mr-2 bg-yellow-400 rounded-full">
                <span className="text-xs text-white">C</span>
              </div>
              <span className="font-medium">내 보유 캐시</span>
              <span className="ml-auto text-2xl font-bold">10</span>
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="bordered" color="success">
            사용내역
            <span className="ml-auto font-bold">0원</span>
          </Button>
          <Button variant="bordered" color="success">
            적립내역
            <span className="ml-auto font-bold">10원</span>
          </Button>
        </div>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Button key={index} variant="light" className="justify-start w-full text-gray-700">
              {React.createElement(item.icon, { className: "w-5 h-5 mr-2 text-green-500" })}
              {item.text}
              <ChevronRight className="w-5 h-5 ml-auto" />
            </Button>
          ))}
        </div>
      </main>
    </div>
  );
}
