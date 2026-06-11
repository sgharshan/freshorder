document.addEventListener('DOMContentLoaded', () => {
    const milkListContainer = document.getElementById('milk-list');
    const breadListContainer = document.getElementById('bread-list');
    const vegListContainer = document.getElementById('veg-list');
    const fruitListContainer = document.getElementById('fruit-list');
    
    const settingsMilkList = document.getElementById('settings-milk-list');
    const settingsBreadList = document.getElementById('settings-bread-list');
    const settingsVegList = document.getElementById('settings-veg-list');
    const settingsFruitList = document.getElementById('settings-fruit-list');
    
    const includeMilk = document.getElementById('include-milk');
    const includeBread = document.getElementById('include-bread');
    const includeVeg = document.getElementById('include-veg');
    const includeFruit = document.getElementById('include-fruit');
    
    const manualListContainer = document.getElementById('manual-list');
    const manualNameInput = document.getElementById('manual-name');
    const manualQtyInput = document.getElementById('manual-qty');
    const addManualBtn = document.getElementById('add-manual-btn');

    const shopNameInput = document.getElementById('shop-name');
    const orderDateInput = document.getElementById('order-date');
    const extraNotesInput = document.getElementById('extra-notes');
    const messagePreview = document.getElementById('message-preview');
    const copyBtn = document.getElementById('copy-btn');
    const sendBtn = document.getElementById('send-btn');
    const clearBtn = document.getElementById('clear-btn');

    const modal = document.getElementById('settings-modal');
    const openSettingsBtn = document.getElementById('open-settings');
    const closeSettingsBtn = document.getElementById('close-settings');
    const saveSettingsBtn = document.getElementById('save-settings');
    
    const presetProfileSelect = document.getElementById('preset-profile');
    const newProfileBtn = document.getElementById('new-profile-btn');
    const newProfileGroup = document.getElementById('new-profile-group');
    const newProfileNameInput = document.getElementById('new-profile-name');
    const saveNewProfileBtn = document.getElementById('save-new-profile-btn');
    const cancelNewProfileBtn = document.getElementById('cancel-new-profile-btn');
    const deleteProfileBtn = document.getElementById('delete-profile-btn');
    const exportProfilesBtn = document.getElementById('export-profiles-btn');
    const importProfilesBtn = document.getElementById('import-profiles-btn');
    const importProfilesFile = document.getElementById('import-profiles-file');
    const searchFilter = document.getElementById('search-filter');

    const milkItems = [
        { name: "2litr blue", hint: "Whole milk" },
        { name: "2litr green", hint: "Semi skimmed" },
        { name: "2litr red", hint: "Skimmed" },
        { name: "1litr Blue", hint: "Whole milk" },
        { name: "1litr Green", hint: "Semi skimmed" },
        { name: "1litr red", hint: "Skimmed" },
        { name: "Pint Blue", hint: "Whole milk" },
        { name: "Pint green", hint: "Semi skimmed" },
        { name: "Pint red", hint: "Skimmed" }
    ];

    const breadItems = [
        { name: "Hovis Medium", hint: "" },
        { name: "Hovis thick", hint: "" },
        { name: "BOB", hint: "Best of both" },
        { name: "Wholemeal", hint: "" }
    ];

    const vegItems = [
        { name: "Carrots - Heritage mixed", hint: "" },
        { name: "Carrots 500g", hint: "" },
        { name: "Coz Lettuce", hint: "" },
        { name: "Mushrooms - wild assortment 250g", hint: "" },
        { name: "POTATOES - 25KG WASHED - ELECTRA / MARFONA", hint: "" },
        { name: "Potatoes - salad / midi 400g", hint: "" },
        { name: "Potatoes 10kg", hint: "" },
        { name: "Potatoes 2kg - NEW SEASON", hint: "" },
        { name: "Potatoes 5kg", hint: "" },
        { name: "Potatoes baking 4 pack", hint: "" },
        { name: "Potatoes Salad New season 400g", hint: "" },
        { name: "Purple Cauliflower - NEW SEASON", hint: "" },
        { name: "SALAD - Radishes", hint: "" },
        { name: "SALAD - Vine Tomatoes 4 pack", hint: "" },
        { name: "Stew pack - LARGE", hint: "" },
        { name: "Bok Choi", hint: "" },
        { name: "Sweetcorn 2 pack", hint: "" },
        { name: "Asparagus", hint: "" },
        { name: "Aubergine", hint: "" },
        { name: "Broccoli - purple sprouting 200g", hint: "" },
        { name: "Broccoli and Cauli Florets", hint: "" },
        { name: "Broccoli Florets", hint: "" },
        { name: "Broccoli per head", hint: "" },
        { name: "Butternut squash", hint: "" },
        { name: "Cabbage Red - EACH", hint: "" },
        { name: "Cabbage Savoy - NEW SEASON", hint: "" },
        { name: "Cabbage White large (approx 1.5-2KG)", hint: "" },
        { name: "Cauliflower", hint: "" },
        { name: "Cauliflower florets", hint: "" },
        { name: "Celeriac", hint: "" },
        { name: "Chillies Mixed 50g", hint: "" },
        { name: "Courgettes 2 pack", hint: "" },
        { name: "Fennel 500g", hint: "" },
        { name: "Fine beans 150g", hint: "" },
        { name: "Garlic 2 pack", hint: "" },
        { name: "Ginger", hint: "" },
        { name: "Hispi Cabbage", hint: "" },
        { name: "Kale", hint: "" },
        { name: "Leeks 500g", hint: "" },
        { name: "Mange tout 150g", hint: "" },
        { name: "mixed chantney carrots 500g", hint: "" },
        { name: "Mushrooms 250g - UK", hint: "" },
        { name: "Mushrooms chestnut 250g", hint: "" },
        { name: "Mushrooms Flat", hint: "" },
        { name: "Onions 500G pack", hint: "" },
        { name: "Onions Spanish 2 pack", hint: "" },
        { name: "Onions Red 500G pack", hint: "" },
        { name: "Parsnips 500g", hint: "" },
        { name: "Rainbow chard", hint: "" },
        { name: "Spinach", hint: "" },
        { name: "Spring Cabbage", hint: "" },
        { name: "Stew pack", hint: "" },
        { name: "Sugar snaps 150g", hint: "" },
        { name: "Swede", hint: "" },
        { name: "Sweet potato 500g", hint: "" },
        { name: "Tenderstem Broccoli", hint: "" },
        { name: "white cabbage small (1kg approx)", hint: "" },
        { name: "WS - baking potatoes - box of 50", hint: "" }
    ];

    const fruitItems = [
        { name: "Apples: Bramley 2 pack", hint: "" },
        { name: "Apples: Golden Delicious 2 pack", hint: "" },
        { name: "Apples: Green 2 pack", hint: "" },
        { name: "Apples: Green 4 pack", hint: "" },
        { name: "Apples: Green 8 pack", hint: "" },
        { name: "Apples: Mixed 4 pack", hint: "" },
        { name: "Apples: Mixed 8 pack", hint: "" },
        { name: "Apples: Red 2 pack", hint: "" },
        { name: "Apples: Red 4 pack", hint: "" },
        { name: "Apples: Red 8 pack", hint: "" },
        { name: "Avocado each", hint: "" },
        { name: "Bananas 3 pack", hint: "" },
        { name: "Blueberries", hint: "" },
        { name: "Dates 250g", hint: "" },
        { name: "Grapefruit 2 pack", hint: "" },
        { name: "Grapes Black 400g", hint: "" },
        { name: "Grapes Green 200g", hint: "" },
        { name: "Grapes Green 400g", hint: "" },
        { name: "Grapes mixed 400g", hint: "" },
        { name: "Grapes: Black 200g", hint: "" },
        { name: "Kiwi 3 pack", hint: "" },
        { name: "Lemons 2 pack", hint: "" },
        { name: "Lemons each", hint: "" },
        { name: "Limes 2 pack", hint: "" },
        { name: "Limes each", hint: "" },
        { name: "Mango each", hint: "" },
        { name: "Melon Galia", hint: "" },
        { name: "Melon Honeydew", hint: "" },
        { name: "Mixed fruit pack", hint: "" },
        { name: "Oranges 2 pack", hint: "" },
        { name: "Oranges 5 pack", hint: "" },
        { name: "Plums 400g", hint: "" },
        { name: "Raspberries", hint: "" },
        { name: "Rhubarb", hint: "" },
        { name: "Satsumas 4 pack", hint: "" },
        { name: "Strawberries 227g", hint: "" },
        { name: "Strawberry - 250G -- LOCAL", hint: "" },
        { name: "Watermelon", hint: "" },
        { name: "apples - 4 pack cox apples", hint: "" },
        { name: "Nadocotts 4 pack", hint: "" },
        { name: "Grapes mixed 200g", hint: "" },
        { name: "Pineapple", hint: "" },
        { name: "pears 2pk - NEW SEASON", hint: "" },
        { name: "Oranges Med. 4PK", hint: "" },
        { name: "Bananas -Fyffes 5 pack (700g - 1000g)", hint: "" },
        { name: "POMEGRANATE - EACH", hint: "" },
        { name: "RED CURRANTS - PER PUNNET", hint: "" },
        { name: "oranges small 6pack", hint: "" },
        { name: "APPLES - english new season royal gala (60-80) - KG PACKS", hint: "" },
        { name: "FIGS - 250g pack", hint: "" }
    ];

    // Load presets
    let profiles = JSON.parse(localStorage.getItem('freshOrderProfiles'));
    if (!profiles) {
        let legacyTargets = JSON.parse(localStorage.getItem('freshOrderTargets')) || {};
        profiles = {
            "default": { name: "Default / Weekday", targets: legacyTargets }
        };
        localStorage.setItem('freshOrderProfiles', JSON.stringify(profiles));
    }
    
    let activeProfileId = localStorage.getItem('freshOrderActiveProfile') || "default";
    if (!profiles[activeProfileId]) activeProfileId = "default";
    let editingProfileId = activeProfileId;

    function getTargetsForProfile(profileId) {
        let t = profiles[profileId].targets;
        [...milkItems, ...breadItems, ...vegItems, ...fruitItems].forEach(item => {
            if (t[item.name] === undefined) t[item.name] = 0;
        });
        return t;
    }
    let targetPresets = getTargetsForProfile(activeProfileId);

    // Load draft from previous session
    let savedDraft = JSON.parse(localStorage.getItem('freshOrderDraft')) || {};

    const stockState = savedDraft.stockState || {
        milk: {},
        bread: {},
        veg: {},
        fruit: {}
    };

    let manualItemsList = savedDraft.manualItemsList || [];

    function saveDraft() {
        localStorage.setItem('freshOrderDraft', JSON.stringify({
            stockState,
            manualItemsList,
            shopName: shopNameInput.value,
            extraNotes: extraNotesInput.value
        }));
    }

    function renderManualList() {
        manualListContainer.innerHTML = '';
        manualItemsList.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item-row';
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'item-info';
            const label = document.createElement('label');
            label.innerText = item.name;
            infoDiv.appendChild(label);
            
            const inputGroup = document.createElement('div');
            inputGroup.className = 'stock-input-group';
            const qtySpan = document.createElement('span');
            qtySpan.innerText = `Qty: ${item.qty}`;
            qtySpan.className = 'target-badge';
            
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '×';
            removeBtn.style.background = 'none';
            removeBtn.style.border = 'none';
            removeBtn.style.color = '#ef4444';
            removeBtn.style.fontSize = '1.5rem';
            removeBtn.style.cursor = 'pointer';
            removeBtn.addEventListener('click', () => {
                manualItemsList = manualItemsList.filter(i => i.id !== item.id);
                renderManualList();
                saveDraft();
                updatePreview();
            });
            
            inputGroup.appendChild(qtySpan);
            inputGroup.appendChild(removeBtn);
            
            div.appendChild(infoDiv);
            div.appendChild(inputGroup);
            manualListContainer.appendChild(div);
        });
    }

    function renderMainList(items, container, category) {
        container.innerHTML = '';
        let hasVisibleItems = false;

        items.forEach(item => {
            const target = targetPresets[item.name];
            
            // Only display items that have a target set greater than 0
            if (!target || target <= 0) return;

            hasVisibleItems = true;
            if (stockState[category][item.name] === undefined) {
                stockState[category][item.name] = ''; // init empty if no draft exists
            }

            const div = document.createElement('div');
            div.className = 'item-row';
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'item-info';
            
            const label = document.createElement('label');
            label.innerText = item.name;
            infoDiv.appendChild(label);
            
            if (item.hint) {
                const hint = document.createElement('span');
                hint.className = 'item-hint';
                hint.innerText = item.hint;
                infoDiv.appendChild(hint);
            }
            
            const inputGroup = document.createElement('div');
            inputGroup.className = 'stock-input-group';
            
            const badge = document.createElement('span');
            badge.className = 'target-badge';
            badge.innerText = `Target: ${target}`;
            
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '0';
            input.placeholder = 'Stock';
            input.inputMode = 'numeric';
            input.pattern = '[0-9]*';
            input.value = stockState[category][item.name];
            input.addEventListener('input', (e) => {
                stockState[category][item.name] = e.target.value;
                saveDraft();
                updatePreview();
            });
            
            // Enter key to jump to next input
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const inputs = Array.from(document.querySelectorAll('.stock-input-group input'));
                    const index = inputs.indexOf(input);
                    if (index > -1 && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    } else {
                        manualNameInput.focus();
                    }
                }
            });
            
            inputGroup.appendChild(badge);
            inputGroup.appendChild(input);
            
            div.appendChild(infoDiv);
            div.appendChild(inputGroup);
            container.appendChild(div);
        });

        if (!hasVisibleItems) {
            container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem; padding: 1rem 0; text-align: center;">No items selected. Set a target in ⚙️ Settings to track items here.</p>';
        }
    }

    function renderSettingsList(items, container, targets) {
        container.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item-row';
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'item-info';
            
            const label = document.createElement('label');
            label.innerText = item.name;
            infoDiv.appendChild(label);
            
            if (item.hint) {
                const hint = document.createElement('span');
                hint.className = 'item-hint';
                hint.innerText = item.hint;
                infoDiv.appendChild(hint);
            }
            
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '0';
            input.inputMode = 'numeric';
            input.pattern = '[0-9]*';
            input.value = targets[item.name];
            input.dataset.item = item.name;
            input.className = 'settings-input';
            
            div.appendChild(infoDiv);
            div.appendChild(input);
            container.appendChild(div);
        });
    }

    function init() {
        const today = new Date();
        orderDateInput.valueAsDate = today;

        if (savedDraft.shopName !== undefined) shopNameInput.value = savedDraft.shopName;
        if (savedDraft.extraNotes !== undefined) extraNotesInput.value = savedDraft.extraNotes;

        renderManualList();
        renderMainList(milkItems, milkListContainer, 'milk');
        renderMainList(breadItems, breadListContainer, 'bread');
        renderMainList(vegItems, vegListContainer, 'veg');
        renderMainList(fruitItems, fruitListContainer, 'fruit');
        
        [includeMilk, includeBread, includeVeg, includeFruit].forEach(cb => {
            if(cb) {
                cb.addEventListener('change', (e) => {
                    const listId = e.target.id.replace('include-', '') + '-list';
                    document.getElementById(listId).style.display = e.target.checked ? 'block' : 'none';
                    updatePreview();
                });
            }
        });

        addManualBtn.addEventListener('click', () => {
            const name = manualNameInput.value.trim();
            const qty = manualQtyInput.value.trim();
            if (name && qty) {
                manualItemsList.push({ id: Date.now(), name, qty });
                manualNameInput.value = '';
                manualQtyInput.value = '';
                renderManualList();
                saveDraft();
                updatePreview();
                manualNameInput.focus(); // Keep focus for rapid consecutive entry
            }
        });

        // Global Search Logic
        if (searchFilter) {
            searchFilter.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const mainContainers = [milkListContainer, breadListContainer, vegListContainer, fruitListContainer];
                
                mainContainers.forEach(container => {
                    const rows = container.querySelectorAll('.item-row');
                    rows.forEach(row => {
                        const name = row.querySelector('label').innerText.toLowerCase();
                        row.style.display = name.includes(term) ? 'flex' : 'none';
                    });
                });
            });
        }

        // Accordion Logic for Mobile Space Saving
        document.querySelectorAll('.section-header h2').forEach(h2 => {
            h2.classList.add('collapsible-header');
            const icon = document.createElement('span');
            icon.className = 'toggle-icon';
            icon.innerText = '▼';
            h2.appendChild(icon);

            h2.addEventListener('click', () => {
                const section = h2.closest('.card');
                const listDiv = section.querySelector('div[id$="-list"]');
                if (listDiv) {
                    const isHidden = listDiv.style.display === 'none';
                    listDiv.style.display = isHidden ? 'block' : 'none';
                    icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
                }
            });
        });

        // Rapid data entry for manual items
        manualNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                manualQtyInput.focus();
            }
        });
        manualQtyInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addManualBtn.click();
            }
        });

        updatePreview();
    }

    function calculateOrder(itemName, category) {
        const target = parseInt(targetPresets[itemName]) || 0;
        const stockInput = stockState[category][itemName];
        
        if (target === 0) return 0; // If target is 0, we don't want to order it
        
        const stock = stockInput === '' ? 0 : parseInt(stockInput) || 0;
        const order = target - stock;
        
        return order > 0 ? order : 0;
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const d = new Date(dateString);
        return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function generateMessage() {
        let msg = "Hi mate ,\n\n";
        
        let hasItems = false;

        // Milk
        if (includeMilk.checked) {
            let milkText = "";
            milkItems.forEach(item => {
                const orderQty = calculateOrder(item.name, 'milk');
                if (orderQty > 0) {
                    milkText += `${item.name} - ${orderQty}\n`;
                    hasItems = true;
                }
            });
            if (milkText) {
                msg += "*Milk*\n" + milkText + "\n";
            }
        }

        // Bread
        if (includeBread.checked) {
            let breadText = "";
            breadItems.forEach(item => {
                const orderQty = calculateOrder(item.name, 'bread');
                if (orderQty > 0) {
                    breadText += `${item.name} - ${orderQty}\n`;
                    hasItems = true;
                }
            });
            if (breadText) {
                msg += "*Bread*\n" + breadText + "\n";
            }
        }
        
        // Veg
        if (includeVeg.checked) {
            let vegText = "";
            vegItems.forEach(item => {
                const orderQty = calculateOrder(item.name, 'veg');
                if (orderQty > 0) {
                    vegText += `${item.name} - ${orderQty}\n`;
                    hasItems = true;
                }
            });
            if (vegText) {
                msg += "*Vegetables*\n" + vegText + "\n";
            }
        }
        
        // Fruit
        if (includeFruit.checked) {
            let fruitText = "";
            fruitItems.forEach(item => {
                const orderQty = calculateOrder(item.name, 'fruit');
                if (orderQty > 0) {
                    fruitText += `${item.name} - ${orderQty}\n`;
                    hasItems = true;
                }
            });
            if (fruitText) {
                msg += "*Fruits*\n" + fruitText + "\n";
            }
        }
        
        // Custom Manual Items
        if (manualItemsList.length > 0) {
            let manualText = "";
            manualItemsList.forEach(item => {
                manualText += `${item.name} - ${item.qty}\n`;
                hasItems = true;
            });
            msg += "*Custom Items*\n" + manualText + "\n";
        }

        if (!hasItems) {
            return "Based on your targets and current stock, you don't need to order anything!";
        }

        const shopName = shopNameInput.value.trim();
        const orderDateStr = orderDateInput.value;
        const extraNotes = extraNotesInput.value.trim();

        if (shopName || orderDateStr) {
            const dateFormatted = formatDate(orderDateStr);
            msg += `Please place this order for ${shopName || '[Shop Name]'} for ${dateFormatted || '[Date]'}\n\n`;
        }

        if (extraNotes) {
            msg += `${extraNotes}\n\n`;
        }

        msg += "Thank you.";
        
        return msg;
    }

    function updatePreview() {
        messagePreview.value = generateMessage();
    }

    function populateProfileSelect() {
        presetProfileSelect.innerHTML = '';
        for (let id in profiles) {
            const option = document.createElement('option');
            option.value = id;
            option.innerText = profiles[id].name;
            presetProfileSelect.appendChild(option);
        }
        presetProfileSelect.value = editingProfileId;
        deleteProfileBtn.style.display = editingProfileId === 'default' ? 'none' : 'block';
    }

    function saveSettingsInputsToProfile(profileId) {
        const inputs = document.querySelectorAll('.settings-input');
        inputs.forEach(input => {
            const itemName = input.dataset.item;
            if (!profiles[profileId].targets) profiles[profileId].targets = {};
            profiles[profileId].targets[itemName] = parseInt(input.value) || 0;
        });
    }

    function renderSettingsForProfile(profileId) {
        const targets = getTargetsForProfile(profileId);
        renderSettingsList(milkItems, settingsMilkList, targets);
        renderSettingsList(breadItems, settingsBreadList, targets);
        renderSettingsList(vegItems, settingsVegList, targets);
        renderSettingsList(fruitItems, settingsFruitList, targets);
    }

    // Modal logic
    openSettingsBtn.addEventListener('click', () => {
        editingProfileId = activeProfileId;
        populateProfileSelect();
        renderSettingsForProfile(editingProfileId);
        modal.classList.add('active');
    });

    closeSettingsBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    saveSettingsBtn.addEventListener('click', () => {
        saveSettingsInputsToProfile(editingProfileId);
        
        activeProfileId = editingProfileId;
        targetPresets = profiles[activeProfileId].targets;
        
        localStorage.setItem('freshOrderProfiles', JSON.stringify(profiles));
        localStorage.setItem('freshOrderActiveProfile', activeProfileId);
        
        // Re-render main list to update badges
        renderMainList(milkItems, milkListContainer, 'milk');
        renderMainList(breadItems, breadListContainer, 'bread');
        renderMainList(vegItems, vegListContainer, 'veg');
        renderMainList(fruitItems, fruitListContainer, 'fruit');
        updatePreview();
        
        modal.classList.remove('active');
    });

    presetProfileSelect.addEventListener('change', (e) => {
        saveSettingsInputsToProfile(editingProfileId);
        editingProfileId = e.target.value;
        renderSettingsForProfile(editingProfileId);
        deleteProfileBtn.style.display = editingProfileId === 'default' ? 'none' : 'block';
    });

    newProfileBtn.addEventListener('click', () => {
        newProfileGroup.style.display = 'flex';
        presetProfileSelect.style.display = 'none';
        newProfileBtn.style.display = 'none';
        newProfileNameInput.focus();
    });

    cancelNewProfileBtn.addEventListener('click', () => {
        newProfileGroup.style.display = 'none';
        presetProfileSelect.style.display = 'block';
        newProfileBtn.style.display = 'block';
        newProfileNameInput.value = '';
    });

    saveNewProfileBtn.addEventListener('click', () => {
        const name = newProfileNameInput.value.trim();
        if (name) {
            saveSettingsInputsToProfile(editingProfileId);
            
            const id = 'profile_' + Date.now();
            profiles[id] = { name: name, targets: {} };
            getTargetsForProfile(id); // Initialize
            
            editingProfileId = id;
            populateProfileSelect();
            renderSettingsForProfile(editingProfileId);
            
            newProfileGroup.style.display = 'none';
            presetProfileSelect.style.display = 'block';
            newProfileBtn.style.display = 'block';
            newProfileNameInput.value = '';
        }
    });

    deleteProfileBtn.addEventListener('click', () => {
        if (editingProfileId !== 'default' && confirm(`Are you sure you want to delete the "${profiles[editingProfileId].name}" profile?`)) {
            delete profiles[editingProfileId];
            editingProfileId = 'default';
            populateProfileSelect();
            renderSettingsForProfile(editingProfileId);
        }
    });

    exportProfilesBtn.addEventListener('click', () => {
        saveSettingsInputsToProfile(editingProfileId); // Ensure current edits are saved
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profiles, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "freshorder_profiles_backup.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    });

    importProfilesBtn.addEventListener('click', () => {
        importProfilesFile.click();
    });

    importProfilesFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedProfiles = JSON.parse(event.target.result);
                if (typeof importedProfiles === 'object' && importedProfiles !== null) {
                    profiles = importedProfiles;
                    localStorage.setItem('freshOrderProfiles', JSON.stringify(profiles));
                    
                    if (!profiles[activeProfileId]) {
                        activeProfileId = Object.keys(profiles)[0] || "default";
                    }
                    if(!profiles[activeProfileId]) {
                         profiles = { "default": { name: "Default / Weekday", targets: {} } };
                         activeProfileId = "default";
                    }
                    
                    localStorage.setItem('freshOrderActiveProfile', activeProfileId);
                    editingProfileId = activeProfileId;
                    targetPresets = getTargetsForProfile(activeProfileId);
                    
                    populateProfileSelect();
                    renderSettingsForProfile(editingProfileId);
                    
                    // Update the main UI with imported targets
                    renderMainList(milkItems, milkListContainer, 'milk');
                    renderMainList(breadItems, breadListContainer, 'bread');
                    renderMainList(vegItems, vegListContainer, 'veg');
                    renderMainList(fruitItems, fruitListContainer, 'fruit');
                    updatePreview();
                    
                    alert('Profiles imported successfully!');
                } else {
                    alert('Invalid backup file format.');
                }
            } catch (err) {
                alert('Error reading backup file. Please ensure it is a valid JSON file.');
            }
            importProfilesFile.value = ''; // Reset file input
        };
        reader.readAsText(file);
    });

    shopNameInput.addEventListener('input', () => { updatePreview(); saveDraft(); });
    orderDateInput.addEventListener('input', updatePreview);
    extraNotesInput.addEventListener('input', () => { updatePreview(); saveDraft(); });

    copyBtn.addEventListener('click', () => {
        const msg = generateMessage();
        if(msg.includes("don't need to order anything")) return;

        navigator.clipboard.writeText(msg).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied! ✓";
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        });
    });

    sendBtn.addEventListener('click', () => {
        const msg = generateMessage();
        if(msg.includes("don't need to order anything")) {
            alert("No items to order based on current stock.");
            return;
        }

        const encodedMsg = encodeURIComponent(msg);
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMsg}`;
        window.open(whatsappUrl, '_blank');
    });

    clearBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear the current order?")) {
            // Clear stock inputs in DOM
            const stockInputs = document.querySelectorAll('.stock-input-group input');
            stockInputs.forEach(input => input.value = '');
            
            // Clear stock state
            ['milk', 'bread', 'veg', 'fruit'].forEach(category => {
                for (let key in stockState[category]) {
                    stockState[category][key] = '';
                }
            });

            // Clear manual items
            manualItemsList = [];
            renderManualList();
            manualNameInput.value = '';
            manualQtyInput.value = '';

            // Reset extra notes and order date
            extraNotesInput.value = '';
            orderDateInput.valueAsDate = new Date();

            // Reset section checkboxes to default (checked)
            [includeMilk, includeBread, includeVeg, includeFruit].forEach(cb => {
                if (cb && !cb.checked) {
                    cb.click(); // Triggers event listener to update visibility
                }
            });

            if (searchFilter) {
                searchFilter.value = '';
                searchFilter.dispatchEvent(new Event('input')); // Reset search view
            }

            localStorage.removeItem('freshOrderDraft');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            updatePreview();
        }
    });

    init();
});
