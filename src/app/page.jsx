import { promises as fs } from 'fs';

const getFileList = async () => {
  const folderToRead = process.cwd() + '/files/';
  const listOfFiles = await fs.readdir(folderToRead,{withFileTypes:true, recursive:true});
  return listOfFiles?.map(item => ({name: item.name, path: item.path}))
}

export default async function Home() {
  const fileList = await getFileList();
  return (
    <main className="min-h-screen  p-24">
      <h1 className="text-4xl	">Audio Files list</h1>
      <ul>
        {fileList.map((item,index) => (
          <li key={index} ><a href={`/api/getFile?fileName=${item.name}`} target='_blank'>{item.name}</a></li>
        ))}
      </ul>
    </main>
  )
}
