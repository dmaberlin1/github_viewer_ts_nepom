import React, {FC, useRef} from 'react';
import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import Button from "../Button/Button";

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields={
    username:HTMLInputElement,

}

export const Search: FC<SearchProps> = ({hasError, onSubmit}) => {
  // const searchRef = useRef<HTMLInputElement  | null>(null);
  // const handleSubmitWithRef = (event: React.FormEvent) => {
  //   event.preventDefault();
  //    const text=searchRef.current?.value  || '';
  //    if(text){
  //      onSubmit(text);
  //
  //      if(searchRef.current)  searchRef.current.value='';
  //    }
  // }

  const handleSubmit=(event:React.FormEvent<HTMLFormElement & FormFields>)=>{
        event.preventDefault();
        const text=event.currentTarget.username.value;
        if(text){
            onSubmit(text)
            event.currentTarget.reset();
        }
  }

  return (
      <form onSubmit={handleSubmit}  autoComplete={'off'}>
        <div className={styles.search}>
    <label htmlFor={'search'} className={styles.label}>
    <SearchIcon/>
    </label>
      <input type="text"
             // ref={searchRef}
      className={styles.textField}
             id={'search'}
             name={'username'}
             placeholder={'Search GitHub username...'}
      />
          {hasError && (
              <div className={styles.error}>
                No result
              </div>
          )}
          <Button>Search</Button>
        </div>
      </form>
  );
}

export default Search;
