export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6A11CB] to-[#2575FC]">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 50" className="h-10">
              <circle cx="30" cy="25" r="20" fill="#2D9CDB" />
              <circle cx="50" cy="25" r="20" fill="#27AE60" />
              <text x="75" y="30" fill="#2D3436" fontSize="20" fontWeight="bold">
                OSEN
              </text>
            </svg>
          </div>
  
          {/* Tiêu đề */}
          <h2 className="text-center text-2xl font-bold text-gray-700">
            Login your account
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Enter your email address and password to access admin panel.
          </p>
  
          {/* Các nút đăng nhập */}
          <div className="flex justify-center gap-4 mb-6">
            {/* Google */}
            <button className="bg-[#FFE6E6] p-3 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
                <path fill="#EA4335" d="M24 9.5c3.37 0 6.37 1.37 8.62 3.58l6.43-6.43C34.4 2.38 29.48.5 24 .5 14.81.5 7.19 6.38 4.47 14.17l7.89 6.14C14.28 12.17 18.74 9.5 24 9.5z" />
                <path fill="#34A853" d="M48 24c0-1.37-.12-2.69-.35-4H24v7.65h13.5C36.09 33.91 30.74 38 24 38c-5.33 0-9.84-3.17-12.18-7.76l-7.89 6.14C8.74 44.83 15.74 48 24 48c12.51 0 22.63-9.48 24-21.76H24z" />
              </svg>
            </button>
  
            {/* Apple */}
            <button className="bg-[#DFF6E6] p-3 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="#000000" d="M16.5 2c-.4 0-.8.1-1.2.3-.3.2-.6.4-.9.7-.4.4-.7.9-.9 1.5-.2.5-.3 1.1-.2 1.7.4.1.8.1 1.3-.1.4-.2.8-.4 1.2-.8.4-.3.8-.8 1.1-1.3.2-.4.4-.9.4-1.4 0-.3-.1-.7-.2-.9z" />
              </svg>
            </button>
  
            {/* Facebook */}
            <button className="bg-[#E6EBFF] p-3 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="#1877F2" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.8 3.4 8.7 7.8 9.7v-6.8h-2.4V12h2.4v-1.8c0-2.4 1.4-3.8 3.5-3.8 1 0 2 .1 2 .1v2.2h-1.4c-1.2 0-1.5.8-1.5 1.6V12h2.5l-.4 2.8h-2.1v6.8C18.6 20.7 22 16.8 22 12z" />
              </svg>
            </button>
  
            {/* LinkedIn */}
            <button className="bg-[#E6F2FF] p-3 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="#0A66C2" d="M20.447 2H3.553C2.146 2 1 3.08 1 4.5v15c0 1.42 1.146 2.5 2.553 2.5h16.894C21.854 22 23 20.92 23 19.5v-15C23 3.08 21.854 2 20.447 2z" />
              </svg>
            </button>
          </div>
  
          <p className="text-center text-sm text-gray-500 mb-6">Or Login With Email</p>
          {/* Form đăng nhập */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
              >
                Forget Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
          </form>
  
          {/* Đăng ký */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Sign Up !
            </a>
          </p>
  
          {/* Footer */}
          <p className="text-xs text-center text-gray-400 mt-6">
            2024 © Osen - By <span className="font-bold">CODERTHEMES</span>
          </p>
        </div>
      </div>
    );
  }
  
  
  
  
  
  
  
  