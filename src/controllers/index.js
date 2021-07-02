// 首页
export async function index(ctx) {
  ctx.body = {
    status: 200
  }
}
// 登录
export async function login(ctx) {
  ctx.body = {
    status: 200
  }
}

export default {index, login}