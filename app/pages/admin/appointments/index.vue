<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <h1 class="text-xl font-bold text-gray-900">Appointments</h1>
          </div>
          <button @click="fetchAppointments" :disabled="loading" class="text-sm font-medium text-[#7fc540] hover:text-[#6ab030] disabled:opacity-50">
            <UIcon :name="loading ? 'i-lucide-loader' : 'i-lucide-refresh-cw'" :class="loading ? 'animate-spin' : ''" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div v-if="loading" class="text-center py-12">
        <UIcon name="i-lucide-loader" class="w-12 h-12 animate-spin text-gray-400 mx-auto" />
      </div>

      <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        <p><span class="font-bold">Error:</span> {{ error }}</p>
      </div>

      <div v-else-if="appointments.length === 0" class="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
        <UIcon name="i-lucide-calendar-off" class="w-12 h-12 text-gray-400 mx-auto" />
        <h3 class="mt-2 text-lg font-medium text-gray-900">No Appointments</h3>
        <p class="mt-1 text-sm text-gray-500">There are no pending or completed appointments.</p>
      </div>

      <div v-else class="space-y-4">
        
        <div class="lg:hidden space-y-4">
          <div v-for="appt in appointments" :key="appt.id" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold text-gray-900">{{ appt.name }}</h3>
                <p class="text-sm text-gray-600">{{ appt.service }}</p>
              </div>
              <StatusBadge :status="appt.status" />
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-700">
              <p class="flex items-center gap-2"><UIcon name="i-lucide-calendar" /> {{ formatDate(appt.preferred_date) }} ({{ appt.preferred_time }})</p>
              <p class="flex items-center gap-2"><UIcon name="i-lucide-phone" /> {{ appt.phone }}</p>
            </div>
            <button @click="openModal(appt)" class="mt-4 w-full px-4 py-2 bg-[#7fc540] text-white rounded-lg hover:bg-[#6ab030] text-sm font-semibold">
              View Details
            </button>
          </div>
        </div>

        <div class="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" class="relative px-6 py-3"><span class="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="appt in appointments" :key="appt.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ appt.name }}</div>
                  <div class="text-sm text-gray-500">{{ appt.phone }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ formatDate(appt.preferred_date) }}</div>
                  <div class="text-sm text-gray-500">{{ appt.preferred_time }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ appt.service }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ appt.location }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <StatusBadge :status="appt.status" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button @click="openModal(appt)" class="text-[#7fc540] hover:text-[#6ab030]">View / Manage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="isModalOpen" 
           class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
           @click.self="isModalOpen = false">
        
        <div v-if="selectedAppointment" 
             class="w-full max-w-2xl bg-white rounded-2xl shadow-xl max-h-[90vh] flex flex-col overflow-hidden">
          
          <div class="relative flex justify-between items-center p-6 border-b border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">{{ selectedAppointment.name }}</h2>
            <button @click="isModalOpen = false" 
                    class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100">
              <UIcon name="i-lucide-x" class="w-6 h-6" />
            </button>
          </div>
          
          <div class="p-6 space-y-6 overflow-y-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <InfoItem icon="i-lucide-calendar" label="Appointment Date" :value="formatDate(selectedAppointment.preferred_date)" />
                <InfoItem icon="i-lucide-clock" label="Preferred Time" :value="selectedAppointment.preferred_time" />
                <InfoItem icon="i-lucide-stethoscope" label="Service" :value="selectedAppointment.service" />
                <InfoItem icon="i-lucide-map-pin" label="Location" :value="selectedAppointment.location" />
              </div>
              <div class="space-y-4">
                <InfoItem icon="i-lucide-phone" label="Phone" :value="selectedAppointment.phone" :isLink="`tel:${selectedAppointment.phone}`" />
                <InfoItem icon="i-lucide-mail" label="Email" :value="selectedAppointment.email || 'N/A'" :isLink="selectedAppointment.email ? `mailto:${selectedAppointment.email}` : undefined" />
                <InfoItem icon="i-lucide-info" label="Status"><StatusBadge :status="selectedAppointment.status" /></InfoItem>
                <InfoItem icon="i-lucide-clock-3" label="Submitted" :value="formatDateTime(selectedAppointment.created_at)" />
              </div>
            </div>
            
            <div>
              <InfoItem icon="i-lucide-message-square" label="Additional Notes" :value="selectedAppointment.message || 'No message provided.'" />
            </div>
          </div>

          <div classs="p-6 bg-gray-50 border-t border-gray-200 rounded-b-2xl">
            <h3 class="text-sm font-medium text-gray-500 mb-3 px-6 pt-5">Manage Appointment</h3>
            <div class="p-6 pt-1 flex flex-col sm:flex-row gap-3">
              <button
                v-if="selectedAppointment.status !== 'confirmed'"
                @click="updateStatus(selectedAppointment.id, 'confirmed')"
                class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <UIcon name="i-lucide-check" /> Mark as Confirmed
              </button>
              <button
                v-if="selectedAppointment.status !== 'completed'"
                @click="updateStatus(selectedAppointment.id, 'completed')"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <UIcon name="i-lucide-check-check" /> Mark as Completed
              </button>
              <button
                v-if="selectedAppointment.status !== 'pending' && selectedAppointment.status !== 'completed'"
                @click="updateStatus(selectedAppointment.id, 'pending')"
                class="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <UIcon name="i-lucide-clock" /> Mark as Pending
              </button>
              
              <button
                @click="handleDelete(selectedAppointment.id)"
                class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-semibold flex items-center justify-center gap-2 sm:ml-auto"
              >
                <UIcon name="i-lucide-trash" /> Delete
              </button>
            </div>
          </div>

        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
// Import helper components
import StatusBadge from '~/components/admin/StatusBadge.vue'
import InfoItem from '~/components/admin/InfoItem.vue'

definePageMeta({
  middleware: ['auth'],
  layout: 'admin'
})

const client = useSupabaseClient()
const appointments = ref([])
const loading = ref(true)
const error = ref('')
const isModalOpen = ref(false)
const selectedAppointment = ref(null)

// Fetch all appointments
async function fetchAppointments() {
  loading.value = true
  error.value = ''
  try {
    const { data, error: fetchError } = await client
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) throw fetchError
    appointments.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// Update appointment status
async function updateStatus(id, newStatus) {
  try {
    const { error: updateError } = await client
      .from('appointments')
      .update({ status: newStatus })
      .eq('id', id)
    
    if (updateError) throw updateError
    
    // Refresh list and close modal
    await fetchAppointments()
    isModalOpen.value = false
    selectedAppointment.value = null
  } catch (err) {
    alert(`Error updating status: ${err.message}`)
  }
}

// Delete appointment
async function handleDelete(id) {
  if (confirm('Are you sure you want to delete this appointment? This cannot be undone.')) {
    try {
      const { error: deleteError } = await client
        .from('appointments')
        .delete()
        .eq('id', id)
      
      if (deleteError) throw deleteError

      // Refresh list and close modal
      await fetchAppointments()
      isModalOpen.value = false
      selectedAppointment.value = null
    } catch (err) {
      alert(`Error deleting appointment: ${err.message}`)
    }
  }
}

// Open modal with appointment details
function openModal(appointment) {
  selectedAppointment.value = appointment
  isModalOpen.value = true
}

// Formatting helpers
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC' // Ensure date isn't shifted by local timezone
  })
}
function formatDateTime(dateString) {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
}

// Fetch on mount
onMounted(() => {
  fetchAppointments()
})
</script>