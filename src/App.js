import './App.css';
import CSVReader from 'react-csv-reader'
import MaterialTable from 'material-table';
import { useEffect, useState } from 'react';

function App() {
  const[data, setData] = useState([])
  const [headings, setHeadings] = useState([])
  const [columns, setColumns] = useState([])
  const [file, setFile] = useState({})

  useEffect(() => {
    const columnsArray = []
    if(headings.length){
      columnsArray.push({title: headings[0], field: headings[0]})
      headings.slice(1, headings.length-1).forEach(heading => {
        columnsArray.push({title: heading, field: heading, searchable: false})
      });
      setColumns(columnsArray)
    }
  }, [headings])

  
    
  console.log(columns)


  return (
    <div className="App">
      <CSVReader
        cssClass='container'
        cssInputClass='button'
        cssLabelClass='label'
        parserOptions={{ header: true }}
        onFileLoaded={(data, fileInfo) => {
          setData(data)
          setHeadings(Object.keys(data[0]))
          setFile(fileInfo)
        }}
      />
      
      <div className='table-container'>
        <MaterialTable
          title={file.name ? file.name : 'CSV'}
          columns={columns}
          data={data}        
          options={{
            search: true,
            paging: true,
            pageSize: 5,
            pageSizeOptions:[5,10,20,50,100],
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: '16px'
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
