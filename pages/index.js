// pages/index.js - MAIN PAGE = ORIGINAL HTML 100%
// Components alada file e ache future update er jonno, kintu main page original kei dekhay
// Tai Theme / Color / CSS / Resolution - kichu missing hobe na
import fs from 'fs';
import path from 'path';
export async function getServerSideProps(){
  const p = path.join(process.cwd(), 'public', 'lsfxm-update15.html');
  let html='';
  try{ html=fs.readFileSync(p,'utf8'); }catch(e){ html='<h1>File not found</h1>'; }
  return {props:{html}};
}
export default function Home({html}){
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}
