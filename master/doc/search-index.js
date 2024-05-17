var searchIndex = new Map(JSON.parse('[\
["pyo3_asyncio",{"doc":"Rust Bindings to the Python Asyncio Event Loop","t":"FCNNNNNNCNNNCHNHENCNCNNNNNHHHHHHHHHHHXCHHHHXHFNNNNNNNNNNNNNNNNNNNNNNNNNKKRRKKKHHHHMHMHHHHMHHHHMMMMFFNNNNNNNNNNNHOHNOHNNNNNNNHHHHHHHHHHHHHHXCHHHHXHCFPFFPFGFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN","n":["TaskLocals","async_std","borrow","borrow_mut","clone","clone_into","context","copy_context","err","event_loop","fmt","from","generic","get_running_loop","into","into_future_with_locals","inventory","new","testing","to_owned","tokio","try_from","try_into","type_id","with_context","with_running_loop","future_into_py","future_into_py_with_locals","get_current_locals","get_current_loop","into_future","into_stream_v1","into_stream_v2","into_stream_with_locals_v1","into_stream_with_locals_v2","local_future_into_py","local_future_into_py_with_locals","main","re_exports","run","run_until_complete","scope","scope_local","test","spawn_blocking","RustPanic","as_ptr","as_ref","borrow","borrow_mut","deref","extract_bound","fmt","fmt","from","from_borrowed_ptr_or_opt","from_owned_ptr_or_opt","into","into_py","new_err","source","to_object","to_string","try_from","try_from","try_from_exact","try_from_unchecked","try_into","type_check","type_id","type_object_raw","ContextExt","JoinError","JoinError","JoinHandle","LocalContextExt","Runtime","SpawnLocalExt","future_into_py","future_into_py_with_locals","get_current_locals","get_current_loop","get_task_locals","into_future","into_panic","into_stream_v1","into_stream_v2","into_stream_with_locals_v1","into_stream_with_locals_v2","is_panic","local_future_into_py","local_future_into_py_with_locals","run","run_until_complete","scope","scope_local","spawn","spawn_local","Args","Test","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","from","from","into","into","main","name","parse_args","task","test_fn","test_harness","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","future_into_py","future_into_py_with_locals","get_current_locals","get_current_loop","get_runtime","init","init_with_runtime","into_future","into_stream_v1","into_stream_v2","into_stream_with_locals_v1","into_stream_with_locals_v2","local_future_into_py","local_future_into_py_with_locals","main","re_exports","run","run_until_complete","scope","scope_local","test","pending","runtime","Builder","CurrentThread","EnterGuard","Handle","MultiThread","Runtime","RuntimeFlavor","TryCurrentError","block_on","block_on","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","clone","clone_into","current","drop","enable_all","enable_time","enter","enter","eq","equivalent","equivalent","event_interval","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","global_queue_interval","handle","into","into","into","into","into","into","is_missing_context","is_thread_local_destroyed","max_blocking_threads","new","new_current_thread","new_multi_thread","on_thread_park","on_thread_start","on_thread_stop","on_thread_unpark","runtime_flavor","shutdown_background","shutdown_timeout","spawn","spawn","spawn_blocking","spawn_blocking","thread_keep_alive","thread_name","thread_name_fn","thread_stack_size","to_owned","to_string","try_current","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","worker_threads"],"q":[[0,"pyo3_asyncio"],[26,"pyo3_asyncio::async_std"],[44,"pyo3_asyncio::async_std::re_exports"],[45,"pyo3_asyncio::err"],[71,"pyo3_asyncio::generic"],[98,"pyo3_asyncio::testing"],[124,"pyo3_asyncio::tokio"],[145,"pyo3_asyncio::tokio::re_exports"],[147,"pyo3_asyncio::tokio::re_exports::runtime"],[246,"pyo3::marker"],[247,"pyo3::types::any"],[248,"pyo3::instance"],[249,"pyo3::err"],[250,"core::fmt"],[251,"core::fmt"],[252,"core::marker"],[253,"core::result"],[254,"core::any"],[255,"pyo3::conversion"],[256,"futures_core::stream"],[257,"core::marker"],[258,"core::ops::function"],[259,"pyo3_ffi::object"],[260,"core::fmt"],[261,"pyo3::instance"],[262,"core::error"],[263,"alloc::string"],[264,"pyo3::err"],[265,"pyo3_ffi::cpython::object"],[266,"core::any"],[267,"core::pin"],[268,"alloc::vec"],[269,"futures_util::future::pending"],[270,"std::io::error"],[271,"core::ops::function"],[272,"tokio::runtime::task::join"]],"d":["Task-local data to store for Python conversions.","async-std-runtime PyO3 Asyncio functions specific to the …","","","","","Get a reference to the python context","Capture the current task’s contextvars","Errors and exceptions related to PyO3 Asyncio","Get a reference to the event loop","","Returns the argument unchanged.","Generic implementations of PyO3 Asyncio utilities that can …","Get a reference to the Python Event Loop from Rust","Calls <code>U::from(self)</code>.","Convert a Python <code>awaitable</code> into a Rust Future","Re-exported for #test attributes","At a minimum, TaskLocals must store the event loop.","testing Utilities for writing PyO3 Asyncio tests","","tokio-runtime PyO3 Asyncio functions specific to the tokio …","","","","Manually provide the contextvars for the current task.","Construct TaskLocals with the event loop returned by …","Convert a Rust Future into a Python awaitable","Convert a Rust Future into a Python awaitable","Either copy the task locals from the current task OR get …","Get the current event loop from either Python or Rust …","Convert a Python <code>awaitable</code> into a Rust Future","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","Convert a <code>!Send</code> Rust Future into a Python awaitable","Convert a <code>!Send</code> Rust Future into a Python awaitable","attributes Provides the boilerplate for the <code>async-std</code> …","attributes re-exports for macros","Run the event loop until the given Future completes","Run the event loop until the given Future completes","Set the task local event loop for the given future","Set the task local event loop for the given !Send future","attributes testing Registers an <code>async-std</code> test with the …","re-export spawn_blocking for use in <code>#[test]</code> macro without …","","Gets the underlying FFI pointer, returns a borrowed …","","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","Creates a new <code>PyErr</code> of this type.","","","","","","","","","","","","Exposes the utilities necessary for using task-local data …","Generic utilities for a JoinError","The error returned by a JoinHandle after being awaited","A future that completes with the result of the spawned task","Adds the ability to scope task-local data for !Send futures","Generic Rust async/await runtime","Extension trait for async/await runtimes that support …","Convert a Rust Future into a Python awaitable with a …","Convert a Rust Future into a Python awaitable with a …","Either copy the task locals from the current task OR get …","Get the current event loop from either Python or Rust …","Get the task locals for the current task","Convert a Python <code>awaitable</code> into a Rust Future","Get the panic object associated with the error.  Panics if …","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","Check if the spawned task exited because of a panic","Convert a <code>!Send</code> Rust Future into a Python awaitable with a …","Convert a <code>!Send</code> Rust Future into a Python awaitable with a …","Run the event loop until the given Future completes","Run the event loop until the given Future completes","Set the task locals for the given future","Set the task locals for the given !Send future","Spawn a future onto this runtime’s event loop","Spawn a !Send future onto this runtime’s event loop","Args that should be provided to the test program","The structure used by the <code>#[test]</code> macros to provide a test …","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Parses test arguments and passes the tests to the …","The fully qualified name of the test","Parse the test args from the command line","Create the task that runs the test","The function used to create the task that runs the test.","Run a sequence of tests while applying any necessary …","","","","","","","","Convert a Rust Future into a Python awaitable","Convert a Rust Future into a Python awaitable","Either copy the task locals from the current task OR get …","Get the current event loop from either Python or Rust …","Get a reference to the current tokio runtime","Initialize the Tokio runtime with a custom build","Initialize the Tokio runtime with a custom Tokio runtime","Convert a Python <code>awaitable</code> into a Rust Future","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","unstable-streams Convert an async generator into a stream","Convert a <code>!Send</code> Rust Future into a Python awaitable","Convert a <code>!Send</code> Rust Future into a Python awaitable","attributes Enables an async main function that uses the …","attributes re-exports for macros","Run the event loop until the given Future completes","Run the event loop until the given Future completes","Set the task local event loop for the given future","Set the task local event loop for the given !Send future","attributes testing Registers a <code>tokio</code> test with the …","re-export pending to be used in tokio macros without …","re-export tokio::runtime to build runtimes in tokio macros …","Builds Tokio Runtime with custom configuration values.","The flavor that executes all tasks on the current thread.","Runtime context guard.","Handle to the runtime.","The flavor that executes tasks across multiple threads.","The Tokio runtime.","The flavor of a <code>Runtime</code>.","Error returned by <code>try_current</code> when no Runtime has been …","Runs a future to completion on this <code>Handle</code>’s associated …","Runs a future to completion on the Tokio runtime. This is …","","","","","","","","","","","","","Creates the configured <code>Runtime</code>.","","","Returns a <code>Handle</code> view over the currently running <code>Runtime</code>.","","Enables both I/O and time drivers.","Enables the time driver.","Enters the runtime context. This allows you to construct …","Enters the runtime context.","","","","Sets the number of scheduler ticks after which the …","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Sets the number of scheduler ticks after which the …","Returns a handle to the runtime’s spawner.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns true if the call failed because there is currently …","Returns true if the call failed because the Tokio context …","Specifies the limit for additional threads spawned by the …","Creates a new runtime instance with default configuration …","Returns a new builder with the current thread scheduler …","Returns a new builder with the multi thread scheduler …","Executes function <code>f</code> just before a thread is parked (goes …","Executes function <code>f</code> after each thread is started but …","Executes function <code>f</code> before each thread stops.","Executes function <code>f</code> just after a thread unparks (starts …","Returns the flavor of the current <code>Runtime</code>.","Shuts down the runtime, without waiting for any spawned …","Shuts down the runtime, waiting for at most <code>duration</code> for …","Spawns a future onto the Tokio runtime.","Spawns a future onto the Tokio runtime.","Runs the provided function on an executor dedicated to …","Runs the provided function on an executor dedicated to …","Sets a custom timeout for a thread in the blocking pool.","Sets name of threads spawned by the <code>Runtime</code>’s thread …","Sets a function used to generate the name of threads …","Sets the stack size (in bytes) for worker threads.","","","Returns a Handle view over the currently running Runtime","","","","","","","","","","","","","","","","","","","Sets the number of worker threads the <code>Runtime</code> will use."],"i":[0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,0,0,54,54,0,0,0,0,0,0,0,55,0,34,0,0,0,0,34,0,0,0,0,55,56,54,57,0,0,39,38,39,38,38,38,39,39,38,39,38,0,38,0,38,38,0,38,39,38,39,38,39,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,47,0,0,0,44,41,42,44,46,49,41,47,42,44,46,49,41,47,42,44,44,44,41,42,42,44,41,47,47,47,42,42,44,46,49,49,41,47,42,44,46,49,41,47,42,41,42,44,46,49,41,47,49,49,42,41,42,42,42,42,42,42,44,41,41,44,41,44,41,42,42,42,42,44,49,44,42,44,46,49,41,47,42,44,46,49,41,47,42,44,46,49,41,47,42],"f":"``{ce{}{}}0{bb}{{ce}d{}{}}{{bf}{{j{h}}}}{{bf}{{l{b}}}}`1{{bn}A`}{cc{}}`{f{{l{{j{h}}}}}}7{{bh}{{l{{`{{Af{}{{Ab{{l{Ad}}}}}}Ah}}}}}}`{{{j{h}}}b}`9`{c{{Aj{e}}}{}{}}0{cAl{}}{{b{j{h}}}b}{f{{l{b}}}}{{fe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{fbe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}Ah}}2{f{{l{h}}}}{h{{l{{`{{Af{}{{Ab{{l{Ad}}}}}}Ah}}}}}}{h{{l{{`{{Bb{}{{B`{{l{Ad}}}}}}}}}}}}{h{{l{{`{{Bb{}{{B`{Ad}}}}}}}}}}{{bh}{{l{{`{{Bb{}{{B`{{l{Ad}}}}}}}}}}}}{{bh}{{l{{`{{Bb{}{{B`{Ad}}}}}}}}}}{{fe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}}}{{fbe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}}}``{{fe}{{l{c}}}{AhBd}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{he}{{l{c}}}{AhBd}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{be}c{}{{Af{}{{Ab{c}}}}Ah}}{{be}c{}{{Af{}{{Ab{c}}}}}}`{e{{Bf{c}}}Ah{{Bh{}{{Ab{c}}}}Ah}}`{BjBl}{Bjh}{ce{}{}}01{{{j{h}}}{{l{Bj}}}}{{Bjn}{{Aj{dBn}}}}0{cc{}}{{fBl}{{C`{c}}}{}}04{{Bjf}{{Cb{Bj}}}}{cCd{CfAhBd}}{Bj{{C`{Ch}}}}{{Bjf}Ad}{cCj{}}{c{{Aj{e}}}{}{}}{c{{Aj{eCl}}}{{Cn{h}}}{}}0{ce{{Cn{h}}}{}}2{{{j{h}}}D`}{cAl{}}{fDb}```````{{fe}{{l{{j{h}}}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{fbe}{{l{{j{h}}}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}Ah}}{f{{l{b}}}}{f{{l{{j{h}}}}}}{{}{{C`{b}}}}{h{{l{{`{{Af{}{{Ab{{l{Ad}}}}}}Ah}}}}}}{Dd{{Dh{Df}}}}{h{{l{{`{{Bb{}{{B`{{l{Ad}}}}}}}}}}}}{h{{l{{`{{Bb{}{{B`{Ad}}}}}}}}}}{{bh}{{l{{`{{Bb{}{{B`{{l{Ad}}}}}}}}}}}}{{bh}{{l{{`{{Bb{}{{B`{Ad}}}}}}}}}}{DdD`}{{fe}{{l{{j{h}}}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}}}{{fbe}{{l{{j{h}}}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}}}{{fe}{{l{c}}}{AhBd}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{{j{h}}e}{{l{c}}}{AhBd}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{be}{{Dj{{Dh{Af}}}}}{}{{Af{}{{Ab{c}}}}Ah}}{{be}{{Dj{{Dh{Af}}}}}{}{{Af{}{{Ab{c}}}}}}{ce{{Af{}{{Ab{d}}}}Ah}{}}{ce{{Af{}{{Ab{d}}}}}{}}``{ce{}{}}000{DlDl}{{ce}d{}{}}{{}Dn}{cc{}}044{{}{{l{d}}}}`2{Dl{{Dj{{Dh{Af}}}}}}`{{{E`{Dl}}Dn}{{l{d}}}}7{c{{Aj{e}}}{}{}}000{cAl{}}0{{fe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{fbe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}Ah}}{f{{l{b}}}}{f{{l{h}}}}{{}Eb}{Edd}{Eb{{Aj{dd}}}}{h{{l{{`{{Af{}{{Ab{{l{Ad}}}}}}Ah}}}}}}{h{{l{{`{{Bb{}{{B`{{l{Ad}}}}}}}}}}}}{h{{l{{`{{Bb{}{{B`{Ad}}}}}}}}}}{{bh}{{l{{`{{Bb{}{{B`{{l{Ad}}}}}}}}}}}}{{bh}{{l{{`{{Bb{}{{B`{Ad}}}}}}}}}}{{fe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}}}{{fbe}{{l{h}}}{{An{Ad}}}{{Af{}{{Ab{{l{c}}}}}}}}``{{fe}{{l{c}}}{AhBd}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{he}{{l{c}}}{AhBd}{{Af{}{{Ab{{l{c}}}}}}Ah}}{{be}c{}{{Af{}{{Ab{c}}}}Ah}}{{be}c{}{{Af{}{{Ab{c}}}}}}`{{}{{Ef{c}}}{}}`````````{{Ehc}{}Af}{{Ebc}{}Af}{ce{}{}}00000000000{Ed{{Aj{EbEj}}}}{EhEh}{{ce}d{}{}}{{}Eh}{Ebd}{EdEd}0{EhEl}{EbEl}{{EnEn}D`}{{ce}D`{}{}}0{{EdF`}Ed}{{Edn}{{Aj{dBn}}}}{{Ehn}{{Aj{dBn}}}}{{Eln}{{Aj{dBn}}}}{{Fbn}{{Aj{dBn}}}}0{{Ebn}{{Aj{dBn}}}}{{Enn}{{Aj{dBn}}}}{cc{}}000007{EbEh}{ce{}{}}00000{FbD`}0{{EdFd}Ed}{{}{{Aj{EbEj}}}}{{}Ed}0{{Edc}Ed{FfAhBd}}000{EhEn}{Ebd}{{EbFh}d}{{Ehc}Fj{AfAh}}{{Ebc}Fj{AfAh}}{{Ehe}{{Fj{c}}}Ah{{Bh{}{{Ab{c}}}}Ah}}{{Ebe}{{Fj{c}}}Ah{{Bh{}{{Ab{c}}}}Ah}}{{EdFh}Ed}{{Edc}Ed{{Cn{Cj}}}}{{Edc}Ed{{Ff{}{{Ab{Cj}}}}AhBd}}=?{cCj{}}{{}{{Aj{EhFb}}}}{c{{Aj{e}}}{}{}}00000000000{cAl{}}00000{{EdFd}Ed}","c":[35,36,90,91,136,137],"p":[[5,"TaskLocals",0],[1,"unit"],[5,"Python",246],[5,"PyAny",247],[5,"Bound",248],[8,"PyResult",249],[5,"Formatter",250],[8,"Result",250],[17,"Output"],[8,"PyObject",248],[10,"Future",251],[10,"Send",252],[6,"Result",253],[5,"TypeId",254],[10,"IntoPy",255],[17,"Item"],[10,"Stream",256],[10,"Sync",252],[5,"JoinHandle",257],[10,"FnOnce",258],[5,"RustPanic",45],[5,"PyObject",259],[5,"Error",250],[6,"Option",260],[5,"Py",248],[5,"PyErr",249],[10,"PyErrArguments",261],[10,"Error",262],[5,"String",263],[5,"PyDowncastError",249],[10,"Into",264],[1,"bool"],[5,"PyTypeObject",265],[10,"JoinError",71],[10,"Any",254],[5,"Box",266],[5,"Pin",267],[5,"Test",98],[5,"Args",98],[5,"Vec",268],[5,"Runtime",147],[5,"Builder",147],[5,"Pending",269],[5,"Handle",147],[5,"Error",270],[5,"EnterGuard",147],[6,"RuntimeFlavor",147],[1,"u32"],[5,"TryCurrentError",147],[1,"usize"],[10,"Fn",258],[5,"Duration",271],[5,"JoinHandle",272],[10,"Runtime",71],[10,"ContextExt",71],[10,"LocalContextExt",71],[10,"SpawnLocalExt",71]],"b":[[52,"impl-Display-for-RustPanic"],[53,"impl-Debug-for-RustPanic"],[185,"impl-Display-for-TryCurrentError"],[186,"impl-Debug-for-TryCurrentError"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
