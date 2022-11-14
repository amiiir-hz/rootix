export default {
  getLoginRoute: (userid: string) =>
    `${process.env.NEXT_PUBLIC_API_URL}/login/${userid}`,
}
