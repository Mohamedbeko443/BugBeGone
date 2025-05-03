import { create } from 'zustand';
import api from '../api/api'; 
import { toaster } from "@/components/ui/toaster"


const base = import.meta.env.VITE_BASE_URL;

const useBugsStore = create((set) => ({
    bugs: [],
    currentBug: null,
    loading: false,
    error: null,

    // Fetch all bugs
    fetchBugs: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`${base}/api/bugs`);
            set({ bugs: response.data, loading: false });
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to fetch bugs',
                loading: false
            });
            toaster.create({title:'Failed to Fetch Bugs',type:'error'});
            throw error;
        }
    },

    // Fetch single bug
    fetchBugById: async (bugId) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`${base}/api/bugs/${bugId}`);
            set({ currentBug: response.data, loading: false });
            return response.data;
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to fetch bug',
                loading: false
            });
            toaster.create({title:'Failed to Fetch Bug',type:'error'});
            throw error;
        }
    },

    // Create new bug
    createBug: async (bugData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post(`${base}/api/bugs/create`, bugData);
            set(state => ({
                bugs: [...state.bugs, response.data],
                loading: false
            }));
            toaster.create({title:'Bug Created Successfully!',type:'success'});
            return response.data;
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to create bug',
                loading: false
            });
            toaster.create({title:'Failed to Create Bug',type:'error'});
            throw error;
        }
    },

    // Update bug
    updateBug: async (bugId, updateData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.patch(`/bugs/${bugId}`, updateData);
            set(state => ({
                bugs: state.bugs.map(bug =>
                    bug.id === bugId ? { ...bug, ...response.data } : bug
                ),
                currentBug: state.currentBug?.id === bugId ?
                    { ...state.currentBug, ...response.data } :
                    state.currentBug,
                loading: false
            }));
            toaster.create({title:'Failed to Fetch Bugs',type:'error'});
            return response.data;
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to update bug',
                loading: false
            });
            toaster.create({title:'Failed to Fetch Bugs',type:'error'});
            throw error;
        }
    },

    // Delete bug
    deleteBug: async (bugId) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`/bugs/${bugId}`);
            set(state => ({
                bugs: state.bugs.filter(bug => bug.id !== bugId),
                currentBug: state.currentBug?.id === bugId ? null : state.currentBug,
                loading: false
            }));
            toaster.create({title:'Failed to Fetch Bugs',type:'error'});
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Failed to delete bug',
                loading: false
            });
            toaster.create({title:'Failed to Fetch Bugs',type:'error'});
            throw error;
        }
    },

    // Clear current bug
    clearCurrentBug: () => set({ currentBug: null }),

    // Reset store
    reset: () => set({ bugs: [], currentBug: null, error: null })
}));

export default useBugsStore;