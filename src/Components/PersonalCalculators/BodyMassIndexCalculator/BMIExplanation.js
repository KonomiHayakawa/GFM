import React from 'react'

const BMIExplanation = (props) => {

  return (
    <div>
      <table>
        <tbody>
          
          <tr>
            <td>
              ИМТ &lt; 18.5:
            </td>
            <td>
              Ниже нормального веса
            </td>
          </tr>
          
          <tr>
            <td>
              ИМТ &ge; 18.5 и &lt; 25: 
            </td>
            <td>
              Нормальный вес
            </td>
          </tr>
      
          <tr>
            <td>
              ИМТ &ge; 25 и &lt; 30:
            </td>
            <td>
              Избыточный вес
            </td>
          </tr>
                
          <tr>
            <td>
              ИМТ &ge; 30 и &lt; 35:
            </td>
            <td>
            Ожирение I степени
            </td>
          </tr>

          <tr>
            <td>
              ИМТ &ge; 35 и &lt; 40:
            </td>
            <td>
              Ожирение II степени
            </td>
          </tr>

          <tr>
            <td>
              ИМТ &ge; 40:
            </td>
            <td>
              Ожирение III степени
            </td>
          </tr>
    
        </tbody>
      </table>        
    </div>
  )
}

export default BMIExplanation