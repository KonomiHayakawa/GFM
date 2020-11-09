import React, { useState } from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

export const AntDesignUploadFormik = (props) => {

  const [isBtsDisabled, toggleIsBtsDisabled] = useState(false)

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok")
    }, 0);
    props.setImgData(file)
  };

  const formProps = {
    onChange(info) {
      if (info.fileList.length >= 1) {
        toggleIsBtsDisabled(true)
      }
      if (info.file.status === 'done') {
        message.success('Файл успешно загружен :)');
      } else if (info.file.status === 'error') {
        message.error(`Загрузка файла не удалась :()`);
      }
    },
    onRemove() {
      toggleIsBtsDisabled(false)
    }
  }

  return (
    <Upload 
      customRequest={customRequest}
      {...formProps}
      accept='image/*'
      multiple={false}
      listType='picture'
    >
      <Button 
        icon={<UploadOutlined />} 
        className={props.className}
        disabled={isBtsDisabled}
      >
        Загрузить
      </Button>
    </Upload>
  )

}

export default AntDesignUploadFormik