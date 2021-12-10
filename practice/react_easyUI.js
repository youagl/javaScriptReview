import React from 'react';
import { Panel, VirtualScroll } from 'rc-easyui';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 10000,
      pageNumber: 1,
      pageSize: 50,
      rowHeight: 60,
      data: [],
      lazy: true
    }
  }
  componentDidMount() {
    this.getData(this.state.pageNumber).then(data => {
      this.setState({data:data})
    })
  }
  getData(pageNumber) {
    const pageSize = this.state.pageSize;
    return new Promise(resolve => {
      setTimeout(() => {
        let data = [];
        let start = (pageNumber - 1) * pageSize;
        for (let i = start; i < start + pageSize; i++) {
          data.push({
            id: i,
            name: "name" + i,
            addr: "address" + i,
            desp: "description" + i
          });
        }
        resolve(data);
      }, 0);
    });
  }
  handlePageChange(event){
    this.getData(event.pageNumber).then(data => {
      this.setState({
        pageNumber: event.pageNumber,
        data: data
      })
    })
  }
  renderItem(item) {
    const itemStyle = {
      borderBottom: '1px solid #ddd',
      padding: '10px 0'
    }
    const numStyle = {
      width: 40,
      height: 40,
      background: '#b8eecf',
      borderRadius: 20,
      textAlign: 'center',
      lineHeight: '40px',
      margin: '0 10px'
    }
    const nameStyle = {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: '22px'
    }
    const despStyle = {
      color: '#666',
      lineHeight: '18px'
    }
    return (
      <div key={item.id} style={itemStyle} className="f-row">
        <div style={numStyle}>{item.id}</div>
        <div>
          <div style={nameStyle}>{item.name}</div>
          <div style={despStyle}>{item.desp}</div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>Virtual Scroll - Lazy Load</h2>
        <Panel>
          <VirtualScroll {...this.state} 
              renderItem={this.renderItem} 
              style={{ height: 250 }}
              onPageChange={this.handlePageChange.bind(this)}>
          </VirtualScroll>
        </Panel>
      </div>
    );
  }
}
 
export default App;