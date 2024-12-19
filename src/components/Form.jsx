import React from "react";

const Form = () => {
  return (
    <div id="form-student">
      <label htmlFor="input-name">Fullname</label>
      <input type="text" id="input-name" />

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="input-date">Birth Date</label>
          <input type="date" id="input-date" name="date" />
        </div>

        <div className="input-group">
          <label htmlFor="input-gender">Gender</label>
          <select id="input-gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <label htmlFor="input-prody">Program Study</label>
      <select id="input-prody">
        <option value="Ekonomi">Ekonomi</option>
        <option value="Manajemen">Manajemen</option>
        <option value="Akuntansi">Akuntansi</option>
        <option value="Administrasi Publik">Administrasi Publik</option>
        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
        <option value="Hubungan Internasional">Hubungan Internasional</option>
        <option value="Teknik Sipil">Teknik Sipil</option>
        <option value="Arsitektur">Arsitektur</option>
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Informatika">Informatika</option>
      </select>

      <input type="submit" value="Add student" id="add-btn" />
    </div>
  );
};

export default Form;
