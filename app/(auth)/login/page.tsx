import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white text-4xl font-bold">C</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">캐시테크</h1>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                id="id"
                name="id"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="패스워드를 입력해주세요"
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              로그인
            </Button>
          </div>
        </form>

        <div>
          <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">
            회원가입
          </Button>
        </div>

        <div className="text-center">
          <a href="#" className="font-medium text-green-600 hover:text-green-500">
            아이디 비밀번호 찾기
          </a>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                네이버 아이디로 간편 로그인
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#03C75A] hover:bg-[#02b350] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03C75A]">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.6 10.9L7.9 2.6H2.6v14.8h5.3V9.5l5.7 7.9h5.3V2.6h-5.3v8.3z"/>
              </svg>
              네이버로 시작하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}