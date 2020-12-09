import React, { useContext } from "react";
import "./filterControls.css";
import {Select,Input} from 'antd';
import { GenresContext } from '../../contexts/genresContext'

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (type, value) => {
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange("name", e.target.value);
  };
  const handleGenreChange = value => {
    handleChange("genre", value);
  };

  return (
    <div className="row movie-control">
      <div className="col-md-12">
          <span>List Filtering:</span>
          <Input
            style={{width:200}}
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span style={{marginLeft:14}}>Genre:</span>
          <Select id="genre" style={{width:200}} onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <Select.Option key={genre.id} value={genre.id}>
                  {genre.name}
                </Select.Option>
              );
            })}
          </Select>
      </div>
    </div>
  );
};

export default FilterControls;
