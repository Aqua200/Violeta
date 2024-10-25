let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:𝑼𝒓𝒖𝒔❤️;;\nFN:𝑼𝒓𝒖𝒔❤️\nORG:𝑼𝒓𝒖𝒔❤️\nTITLE:\nitem1.TEL;waid=6282114987516:6282114987516\nitem1.X-ABLabel:𝑼𝒓𝒖𝒔❤️\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝑼𝒓𝒖𝒔❤️nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
