//○ tasks can only be created during weekdays;
//○ tasks can only be updated or deleted if in status pending;
//○ tasks can only be deleted if its creation date is older than 5 days ago.

const ValidationTodo={ 
    validExclusion: function(dateCreated_at){
        const dateNow = new Date() 
        const dateLimit = new Date() 
        dateLimit.setDate(dateLimit.getDate()- 5) 
        return dateCreated_at < dateLimit 
    },

    enumStatus: { 
        pending: 'pending',
        in_progress: 'in_progress',
        completed: 'completed'
    }

}

export default ValidationTodo


