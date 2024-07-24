import { useEffect, useState } from 'react';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../types/product.type';



function Search() {
    const [data, setData] = useState<Product[]>([]);
    const [filterData, setFilterData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:3002/products")
        .then((response) => response.json())
        .then(data => {
            setFilterData(data);
        })
        .catch(err => console.log(err));
    }, []);

    // const debounce = (func: () => void, delay: number) => {
    //     let debounceTimer: number;
    //     return function(...args) {
    //         const context = this;
    //         clearTimeout(debounceTimer);
    //         debounceTimer = setTimeout(() => func.apply(context, args), delay);
    //     };
    // };
    function debounce<T extends (...args: string[]) => void>(func: T, wait: number): T {
        let timeout: ReturnType<typeof setTimeout> | null = null;
      
        return function(this: ThisParameterType<T>, ...args: Parameters<T>): void {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const context = this;
      
          if (timeout !== null) {
            clearTimeout(timeout);
          }
      
          timeout = setTimeout(() => {
            func.apply(context, args);
          }, wait);
        } as T;
      }

    // Định nghĩa kiểu cho hàm debounce
// type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

// Hàm debounce
// function debounce<T extends (...args: any[]) => any>(func: T, wait: number): DebouncedFunction<T> {
//   let timeout: ReturnType<typeof setTimeout> | null;

//   return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
//     const context = this;

//     const later = () => {
//       timeout = null;
//       func.apply(context, args);
//     };

//     if (timeout !== null) {
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(later, wait);
//   };
// }
    const handleFilter = (value:string) => {
        const response = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
        setData(response);
        if (value === "") {
            setData([]);
        }
    };
    // set time tìm kiếm 
    const debouncedHandleFilter = debounce(handleFilter, 500);

    const handleProductClick = (id: number) => {
        window.location.href = `/SanPham/${id}`;
      };

    return (
        <div className='search-top'>
            <div className='search'>
                <div className='search-input-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Tìm sản phẩm..."
                    onChange={e => debouncedHandleFilter(e.target.value)}
                />
            </div>
            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i} onClick={() => handleProductClick(d.id)} className="search-result-item">
                        <img src={d.image} alt={d.name} className="product-image" />
                        <div className="product-name">{d.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
