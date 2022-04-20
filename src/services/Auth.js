const Delay = (ms) => new Promise(
  (resolved) => setTimeout(resolved, ms, true)
)

export const LoginToServer = async (email, password) => {
  await Delay(3000) // Pengecekan email dan password di server
  return { email, id: 1231, fullName: 'Erdecode Channel' }
}