// import React, { Component } from 'react';
// // import { withRouter } from 'react-router-dom';
// import SubcategoryBest from './SubcategoryBest/SubcategoryBest';
// import { BsBookHalf } from 'react-icons/bs';
// import './Categories.scss';

// export class Categories extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: [],
//       // id: '',
//     };
//   }

//   componentDidMount() {
//     // const { id } = this.props.match.params;
//     // fetch(`/data/subBestseller${id}.json`)
//     // const { search } = this.props.location;
//     // fetch(`http://10.58.0.31:8000/${this.props.location.search}`)
//     fetch('http://10.58.0.31:8000/products?sub_category=1')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           list: data.products,
//           // id,
//         });
//       });
//     console.log(this.props);
//   }

//   componentDidUpdate() {
//     // const { id } = this.props.match.params;
//     // fetch(`/data/subBestseller${id}.json`)
//     // const { search } = this.props.location;
//     // fetch(`http://10.58.0.31:8000/${this.props.location.search}`)
//     fetch(`http://10.58.0.31:8000/products?sub_category=2`)
//       .then(res => res.json())
//       .then(data => {
//         // if (search !== prevProps.location.search) {
//         this.setState({
//           list: data.products,
//           // id,
//         });
//         // }
//       });
//     console.log(this.props);
//   }

//   render() {
//     // const { list, id } = this.state;
//     const { list } = this.state;
//     // const queryId = this.props.location.search.split('=')[1];
//     console.log(this.props);

//     return (
//       <div className="categories">
//         <h1 className="categoryName">
//           <span className="bookIcon">
//             <BsBookHalf color="#f9b418" />
//           </span>
//           {/* {queryId < 9 ? '소설' : '컴퓨터/IT'} */}
//         </h1>
//         <div className="bestsellerTitle">베스트셀러</div>
//         <div className="bestsellerWrap">
//           {list.map(el => {
//             return <SubcategoryBest key={el.id} list={el} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// // export default withRouter(Categories);
// export default Categories;

import React, { Component } from 'react';
import SubcategoryBest from './SubcategoryBest/SubcategoryBest';
import { BsBookHalf } from 'react-icons/bs';
import './Categories.scss';

export class Categories extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      // id: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // fetch(`/data/subBestseller${id}.json`)
    fetch(`http://10.58.0.31:8000/products?sub_category=${id}`)
      // fetch(`http://10.58.0.31:8000/products?sub_category=8`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data.products,
          // id,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    // fetch(`/data/subBestseller${id}.json`)
    fetch(`http://10.58.0.31:8000/products?sub_category=${id}`)
      .then(res => res.json())
      .then(data => {
        if (id !== prevProps.match.params.id) {
          this.setState({
            list: data.products,
            // id,
          });
        }
      });
  }

  render() {
    const { list } = this.state;
    // console.log(this.props.match.params.id);
    console.log(list);

    return (
      <div className="categories">
        <h1 className="categoryName">
          <span className="bookIcon">
            <BsBookHalf color="#f9b418" />
          </span>
          {/* {id < 9 ? '소설' : '컴퓨터/IT'} */}
        </h1>
        <div className="bestsellerTitle">베스트셀러</div>
        <div className="bestsellerWrap">
          {list.map(el => {
            // return <SubcategoryBest key={el.id} list={el} />;
            return <SubcategoryBest key={el.name} list={el} />;
          })}
        </div>
      </div>
    );
  }
}

export default Categories;
