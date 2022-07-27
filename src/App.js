import './App.css';
import CSVReader from 'react-csv-reader'
import MaterialTable from 'material-table';
import { useState } from 'react';

function App() {
  const[data, setData] = useState([])
  const [headings, setHeadings] = useState([])
  console.log(headings)
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
        }}
      />
      
      <div className='table-container'>
        <MaterialTable
          title="Cases CSV"
          columns={[
            { title: 'Vin C', field: 'vin_c' },
            { title: 'Case Number', field: 'case_number', searchable: false  },
            { title: 'Status', field: 'status', searchable: false  },
            { title: 'Reason', field: 'reason', searchable: false  },
            { title: 'Case Sub Reason C', field: 'case_sub_reason_c', searchable: false  },
            { title: 'Subject', field: 'subject', searchable: false  },
            { title: 'Description', field: 'description', searchable: false  },
            { title: 'Created Date', field: 'created_date', searchable: false  },
            { title: 'Owner Id', field: 'owner_id', searchable: false  }
          ]}
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
