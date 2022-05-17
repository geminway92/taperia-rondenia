import { shallowMount } from '@vue/test-utils'
import ReservasView from '../../src/views/ReservasView.vue'

describe('ReservasView.vue', () => {

  describe('Comprobando las mesas disponibles...', () => {

      test('Debe desconstar las mesas que están reservadas a esa hora y día ', () => {
        const wrapper = shallowMount(ReservasView, {
          data(){
            return{
              tableAvailableInterior: 16,
              tableAvailableExterior: 9,
              dateForm: "2022-05-17",
              clientForm: {
                name: '',
                lastname: '',
                  email: '',
                  diners: 1,
                  phone: '',
                  comments: ''
                  
                },
                checkedHour: "22:30",
                checkedTable: 'Exterior',
                checkedPrivacity: true,
              }
        }
      })

      const dataRecibe = [
        {
          "clientReserve": {
            "comments": "dsdsds",
            "diners": 6,
              "email": "dsdss@dsdsd",
              "lastname": "dsdsd",
              "name": "dsdsds",
              "phone": "722177335"
            },
          "dayReserve": "2022-05-17",
          "numbTableReserve": 2,
          "hourReserve": "22:30",
          "zoneReserve": "Interior"
        },
      ]

      expect(wrapper.vm.tableAvailableInterior).toBe(16)
      expect(wrapper.vm.tableAvailableExterior).toBe(9)

      wrapper.vm.checkAvailebleAllZone(dataRecibe)
      
      expect(wrapper.vm.tableAvailableInterior).toBe(14)
      expect(wrapper.vm.tableAvailableExterior).toBe(9)
    })
  })
})